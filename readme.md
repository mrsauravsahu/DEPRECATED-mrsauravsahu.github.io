# mrsauravsahu.github.io

WIP for life: A little site that tells the world who I am. https://mrsauravsahu.github.io. How to run locally? You'll need docker and compose for running the app locally. 

```
docker-compose -f docker-compose.debug.yml build --parallel
docker-compose -f docker-compose.debug.yml up -d
```

Now you can visit http://localhost:3000 for the frontend sapper app and http://localhost:5000/swagger for the ASP .NET Core Web API