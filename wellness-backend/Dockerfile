# ===============================
# Stage 1: Build
# ===============================
FROM maven:3.9.9-eclipse-temurin-21 AS build

# Set working directory
WORKDIR /app

# Copy only POM first to download dependencies
COPY pom.xml .

# Pre-download dependencies (avoids missing artifact errors)
RUN mvn dependency:go-offline -B

# Copy full source code
COPY src ./src

# Build the Spring Boot app
RUN mvn clean package -DskipTests -B

# ===============================
# Stage 2: Runtime
# ===============================
FROM eclipse-temurin:21-jre-alpine

# Set working directory
WORKDIR /app

# Copy the built jar from the build stage
COPY --from=build /app/target/wellness-backend-0.0.1-SNAPSHOT.jar .

# Expose the default Spring Boot port
EXPOSE 8080

# Environment variable for optional JWT secret (can be added in Render dashboard)
ENV JWT_SECRET=replace_with_your_secret

# Run the Spring Boot application
CMD ["java","-jar","wellness-backend-0.0.1-SNAPSHOT.jar"]
