FROM ubuntu:latest
LABEL authors="Facu"

ENTRYPOINT ["top", "-b"]

# Build stage
FROM node:14 as build

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build

# Package stage
FROM openjdk:11-jre-slim

COPY --from=build /app/build /frontend
COPY backend/target/backend.jar /backend.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/backend.jar"]
