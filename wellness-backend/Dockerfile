# ---------------------
# Stage 1: Build the project
# ---------------------
FROM maven:3.9.9-eclipse-temurin-21 AS build

# Set working directory
WORKDIR /app

# Copy pom.xml first to leverage Docker caching for dependencies
COPY pom.xml .

# Pre-download all dependencies (avoids missing artifact errors)
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Build the project (skip tests for faster build)
RUN mvn clean package -DskipTests

# ---------------------
# Stage 2: Run the application
# ---------------------
FROM eclipse-temurin:21-jre

# Set working directory
WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/wellness-backend-0.0.1-SNAPSHOT.jar wellness-backend.jar

# Expose Spring Boot port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "wellness-backend.jar"]
