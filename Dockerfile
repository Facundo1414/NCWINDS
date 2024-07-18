# Build stage
FROM maven:3.8.6-openjdk-11-slim AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package

# Package stage
FROM openjdk:11-jre-slim
COPY --from=build /app/target/backend.jar /backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/backend.jar"]
