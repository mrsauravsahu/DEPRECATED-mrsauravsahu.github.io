Note: There's a video version available where I actually build this project and deploy it to npmjs: https://youtu.be/4N1lwa6w6HA

Documentation of any sort looks like an overhead at the time, but pays off really well for projects that need to maintained for a long time, when teams change, when onboarding new members, and a whole lot others.

For nodejs projects, application configuration is usually read from `process.env` which in turn come from a place like ENVIRONMENT variables or a configuration file like `.env`. During development, this package `dotenv` is a great tool to set your environment variables.

## Documentation is Key

For large projects with even larger teams, code base changes constantly and so does the configuration. So documentation is key to keep anyone who uses the code base later. 

A typical `.env` file looks like this (it's a collection of key=value pairs)

```env
# The Node environment
NODE_ENV=development

# Url to a third party service
API_SERVICE_URL=https://mrsauravsahu.tech/posts/41/file
```

Since the value could contain sensitive information, to document this, we should ideally omit the value from each key=value pair and add this template of sorts to source control, which look something like the example below:

```env
# The Node environment
NODE_ENV=

# Url to a third party service
API_SERVICE_URL=
```

## What did I build?

I created an npm package which generates these template `.env` files from the real .env file, called [gen-env-template](https://npmjs.com/gen-env-template).
This is a dev-tool so you can install it as a devDependency.

```bash
# Use your favorite package manager to install this. (You can use npx to run directly as well)
npm i -D gen-env-template
```

Now that we have the package, we can pass in the `.env` file we're using and path to the outfile file. For example, if this is our input file - 

```bash
➜ cat .env     
# The Node environment
NODE_ENV=

# Url to a third party service
API_SERVICE_URL=
```

We can generate our template file with this command 
```bash
➜ ./node_modules/.bin/gen-env-template .env template.env
```

Now we get the generated template file 
```bash
➜ cat template.env 
# The Node environment
NODE_ENV=

# Url to a third party service
API_SERVICE_URL=
```

Now, this `template.env` file can be safely committed to source control as all secrets have been omitted. You can the Github repository for this project here - [mrsauravsahu/gen-env-template on Github](https://github.com/mrsauravsahu/gen-env-template)
