FROM mcr.microsoft.com/dotnet/sdk:5.0

WORKDIR /app/mrsauravsahu.api

CMD dotnet watch run

HEALTHCHECK --interval=1s CMD curl --fail http://localhost:5000  || exit 1

EXPOSE 5000