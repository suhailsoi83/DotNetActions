# Use the official .NET SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

# Copy the project file and restore dependencies
COPY ["PaymentAPI/PaymentAPI.csproj", "PaymentAPI/"]
RUN dotnet restore "PaymentAPI/PaymentAPI.csproj"

# Copy the rest of the code
COPY . .

# Build the application
WORKDIR "/src/PaymentAPI"
RUN dotnet publish "PaymentAPI.csproj" -c Release -o /app/publish

# Use the official .NET runtime image to run the app
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Expose port (adjust to your app's settings)
EXPOSE 80
ENTRYPOINT ["dotnet", "PaymentAPI.dll"]



