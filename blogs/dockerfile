FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

WORKDIR /app/mrsauravsahu.api

COPY . .

RUN dotnet restore

RUN dotnet publish -c Release -o out -r linux-musl-x64

FROM mcr.microsoft.com/dotnet/aspnet:5.0-alpine

WORKDIR /app

COPY --from=build /app/mrsauravsahu.api/out .

CMD ./mrsauravsahu.api

EXPOSE 80