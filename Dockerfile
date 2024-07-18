# Usa una imagen base de OpenJDK
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo pom.xml y el wrapper de Maven
COPY pom.xml mvnw ./
COPY .mvn .mvn

# Da permisos de ejecución al wrapper de Maven
RUN chmod +x mvnw

# Resuelve dependencias de Maven
RUN ./mvnw dependency:resolve

# Copia el código fuente
COPY src ./src

# Construye el proyecto
RUN ./mvnw package

# Define el comando de entrada
CMD ["./mvnw", "spring-boot:run"]
