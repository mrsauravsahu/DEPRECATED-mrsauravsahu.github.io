Docker is great, isn't it? It has solved so many problems and helps developers easily deploy applications without complex configuration. But it's also our responsibility to use it well. Docker images are basically templates that will create containers will which run our application - so it is important that we package our application which creates the most optimized and compact results. This is to ensure that our docker images can be used more effectively - deploying your image as a microservice? It's best to have light-weight services. Writing these docker images to a container registry? Save space and store the most optimized docker images.

> Note: Even though we're going to take a look at a sample nestjs application, this applies to any sort of application you're building.

You can find the entire repository here and you can experiment with this. So, to give you a brief about the app, it's a basic hello API which has one route that returns some information about itself. If you run the app locally, with a `PORT=8080 npm start` you can see the response by sending a request to `GET /`

Here's a sample response:

```json
{
    "data": {
        "app": "hello",
        "version": "v0.0.1"
    }
}
```

The first version of the application is ready, which will evolve overtime, let's say. So now we can move over to `"dockerizing"` this application. I'll write each version of the app against the operation we do. 

To build the docker image, I'll be using this command 

```bash
$ docker build -t hello:v0.0.1 -f dockerfile . # <-- replace the version for each build
```

Once you have created an image, you can run it with this docker run command

```bash
$ docker run -p 8080:80 hello:v0.0.1 # <-- you can now hit http://localhost:8080/
```

## v0.0.1 - Simple and Straightforward

So, first, let's write a very simple and straight forward dockerfile to create out image. You can see, we're just using the node's LTS tagged image to install our packages, building our project and running it. 

```docker
FROM node:lts

WORKDIR /app

COPY package* . 

RUN npm ci

COPY . .

RUN npm run build

ENTRYPOINT node dist/src/main.js
```

I've also symlinked the `.gitignore` to `.dockerignore` as we don't need those in our context.

```docker
# compiled output
/dist
/node_modules

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# OS
.DS_Store

# Tests
/coverage
/.nyc_output

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
```

So, right now, we end-up with an image whose size is 1.23GB, which is bad news for just a hello sort of app. By the way, you can check the size of your images with in the `docker images` command. 

## v0.0.2 - Muliti Stage Builds

Here, we'll build and package our application in separate environments. This will fix a few things for us -

- the docker image will not container any `devDependency`
- we can also choose to remove the test code or the source code entirely from the docker image

For the final image, we're using alpine tags. alpine is a lightweight linux distro and great for docker images.

```docker
FROM node:14.17.1 as buildEnv

WORKDIR /app

COPY package* .

RUN npm ci

COPY . .

RUN npm run build

FROM node:14.17.1-alpine # <-- real small images

WORKDIR /app

COPY --from=buildEnv /app/package* .

RUN npm i --prod

COPY --from=buildEnv /app/dist dist

ENTRYPOINT node . # <-- this works because of the 'main' property in package.json
```

That was great! We have an image with a size of 130MB. That's great progress. But we can do better. How?

## v0.0.3 - Install Node in an Alpine Image

Rather than using node's alpine tagged docker image, we can create our own from alpine images. So what will be trimming off? Well, node's alpine tags still contain things like `npm`, which we really don't need at runtime. (Maybe your app does, so this might not work for you.)

```docker
FROM node:lts as buildEnv

WORKDIR /app

COPY package* .

RUN npm ci

COPY . .

RUN npm run build

FROM node:lts-alpine as finalCodeEnv

WORKDIR /app

COPY --from=buildEnv /app/package* .

RUN npm i --prod

COPY --from=buildEnv /app/dist dist

FROM alpine 

WORKDIR /app

RUN apk add nodejs

COPY --from=finalCodeEnv /app .

ENTRYPOINT node .
```

We've already reduced the image size from 1.23GB to 58.5MB - which is almost a twenty fold (`21.49X`) improvement, but can we go further? Since we've installed some packages with apk, maybe we can remove the cache to save some space. Let's add a new stage in our `dockerfile` to clear the apk cache. Let's give it a go!

## v0.0.4 - Clear APK Cache

```docker
FROM node:lts as buildEnv

WORKDIR /app

COPY package* .

RUN npm ci

COPY . .

RUN npm run build

FROM node:lts-alpine as finalCodeEnv

WORKDIR /app

COPY --from=buildEnv /app/package* .

RUN npm i --prod

COPY --from=buildEnv /app/dist dist

FROM alpine 

WORKDIR /app

RUN apk add nodejs && rm -rf /var/cache/apk/* ## <-- Clear APK Cache

COPY --from=finalCodeEnv /app .

ENTRYPOINT node .
```

If you see the final image sizes, there's not much of a difference. After checking folder sizes inside the container, you can see our app is around 29MB. The next largest file is the `node` interpreter itself, around 30MB, so can't really do much about it. But, at the end of it all, it was a great exercise and now you can see how light-weight you can make nestjs, and nodejs images in general.

```bash
$ docker images --format "{{.ID}}\t{{.Size}}\t{{.Repository}}\t{{.Tag}}" | sort -k 4 | grep hello

e3f7f026264d	1.23GB	hello	v0.0.1
167438686d8f	130MB   hello	v0.0.2
7f83291130fd	58.6MB	hello	v0.0.3
ab3fc836943c	56.5MB	hello	v0.0.4
```

So this was a guide as to how to downsize images when writing dockerfiles for your applications. Try this out with different sort of apps and languages. It's always fun to see how to creatively create optimized images. Enjoy! Happy coding!

\- [Saurav](https://twitter.com/mrsauravsahu)