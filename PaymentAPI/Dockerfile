# Build stage
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Set the working directory to /src
WORKDIR /src

# Copy the PaymentAPI.csproj file into the container
COPY ["PaymentAPI.csproj", "PaymentAPI/"]

# Restore dependencies
RUN dotnet restore "PaymentAPI.csproj"

# Copy the rest of the source code into the container
COPY . .

# Publish the application to /app/publish
RUN dotnet publish "PaymentAPI.csproj" -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS final

# Set the working directory to /app
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/publish .

# Expose port 80
EXPOSE 80

# Set the entrypoint to run the application
ENTRYPOINT ["dotnet", "PaymentAPI.dll"]
