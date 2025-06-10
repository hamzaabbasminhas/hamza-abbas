# Use Maven with JDK 11 as the base image
FROM maven:3.8.6-eclipse-temurin-11

# Set working directory
WORKDIR /app 

# Copy pom.xml
COPY pom.xml .

# Copy source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Set the entrypoint to run tests
ENTRYPOINT ["mvn", "test"] 