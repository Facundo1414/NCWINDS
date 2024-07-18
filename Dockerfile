# Etapa de construcción
FROM openjdk:17-jdk-slim AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para resolver dependencias
COPY pom.xml mvnw ./
COPY .mvn .mvn

# Resuelve dependencias de Maven
RUN ./mvnw dependency:resolve

# Copia el código fuente
COPY src src

# Empaqueta la aplicación
RUN ./mvnw package

# Etapa de ejecución
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo
WORKDIR /demo

# Copia el jar generado en la etapa de construcción
COPY --from=build /app/target/*.jar demo.jar

# Define el punto de entrada del contenedor
ENTRYPOINT ["java", "-jar", "demo.jar"]
