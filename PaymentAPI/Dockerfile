# Use the official .NET SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Set working directory in the container
WORKDIR /src

# Copy the .csproj file and restore any dependencies (via NuGet)
COPY PaymentAPI/*.csproj ./
RUN dotnet restore

# Copy the entire project files and build the project
COPY PaymentAPI/. ./
RUN dotnet build -c Release -o /app/build

# Publish the application
RUN dotnet publish -c Release -o /app/publish

# Use the official .NET runtime image to run the app
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime

# Set working directory in the container
WORKDIR /app

# Copy the published app from the build stage
COPY --from=build /app/publish .

# Expose the port your app will run on
EXPOSE 80

# Set the entry point for the application
ENTRYPOINT ["dotnet", "PaymentAPI.dll"]
