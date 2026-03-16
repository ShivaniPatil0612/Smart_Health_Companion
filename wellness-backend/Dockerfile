# ===============================
# Stage 1: Build
# ===============================
FROM maven:3.9.9-eclipse-temurin-21 AS build

WORKDIR /app

# Copy only POM first to cache dependencies
COPY pom.xml .

# Pre-download dependencies (avoids missing artifact errors)
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the Spring Boot app
RUN mvn clean package -DskipTests -B

# ===============================
# Stage 2: Runtime
# ===============================
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copy the built jar
COPY --from=build /app/target/wellness-backend-0.0.1-SNAPSHOT.jar .

# Expose Spring Boot default port
EXPOSE 8080

# Optional: JWT secret
ENV JWT_SECRET=replace_with_your_secret

# Run Spring Boot
CMD ["java","-jar","wellness-backend-0.0.1-SNAPSHOT.jar"]
