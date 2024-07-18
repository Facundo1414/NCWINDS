# Build stage
FROM maven:3.8.6-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package

# Package stage
FROM openjdk:17-jre-slim
COPY --from=build /app/target/Travel-platform-0.0.1-SNAPSHOT.jar /backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/backend.jar"]
