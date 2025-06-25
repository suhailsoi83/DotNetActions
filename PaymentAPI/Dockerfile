# Use the official .NET 6 ASP.NET image as the base image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

# Use the .NET SDK image for the build process
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

# Copy the project file and restore dependencies
COPY ["PaymentAPI/PaymentAPI.csproj", "PaymentAPI/"]
RUN dotnet restore "PaymentAPI/PaymentAPI.csproj"

# Copy the rest of the source code and publish the app
COPY . .
WORKDIR "/src/PaymentAPI"
RUN dotnet publish "PaymentAPI.csproj" -c Release -o /app/publish

# Create the final image by copying the published files from the build image
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "PaymentAPI.dll"]
