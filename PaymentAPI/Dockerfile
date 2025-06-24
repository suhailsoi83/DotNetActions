FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["PaymentAPI.csproj", ",/"]
RUN dotnet restore "PaymentAPI.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "PaymentAPI.csproj" -c Release -o /src/build

FROM build AS publish
RUN dotnet publish "PaymentAPI.csproj" -c Release -o /src/publish

FROM build as final
WORKDIR /src
COPY --from=publish /src/publish . 
ENTRYPOINT ["dotnet", "PaymentAPI.dll"]
