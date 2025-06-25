FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["PaymentAPI/PaymentAPI.csproj", "PaymentAPI/"]
RUN dotnet restore "PaymentAPI/PaymentAPI.csproj"
COPY . .
WORKDIR "/src/PaymentAPI"
RUN dotnet publish "PaymentAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "PaymentAPI.dll"]
