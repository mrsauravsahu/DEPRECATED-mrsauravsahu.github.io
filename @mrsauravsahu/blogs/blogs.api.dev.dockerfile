FROM mcr.microsoft.com/dotnet/core/sdk:3.1

WORKDIR /app/blogs.api

CMD dotnet watch run

HEALTHCHECK --interval=1s CMD curl --fail http://localhost:5000  || exit 1

EXPOSE 5000