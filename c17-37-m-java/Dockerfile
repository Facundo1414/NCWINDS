FROM openjdk:11-jre-slim
COPY target/backend.jar /backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/backend.jar"]
