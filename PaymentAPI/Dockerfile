FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY PaymentAPI.csproj .
RUN dotnet restore "PaymentAPI.csproj"
COPY . .
RUN dotnet publish "PaymentAPI.csproj" -c Release -o /publish .
