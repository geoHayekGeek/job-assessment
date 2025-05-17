# First stage: build using Eclipse Temurin 23 and Gradle installed manually
FROM eclipse-temurin:23-jdk-alpine as builder

WORKDIR /app

# Install Gradle manually
RUN apk add --no-cache curl unzip && \
    curl -sSL https://services.gradle.org/distributions/gradle-8.7-bin.zip -o gradle.zip && \
    unzip gradle.zip && \
    mv gradle-* /opt/gradle && \
    ln -s /opt/gradle/bin/gradle /usr/bin/gradle

# Copy project files
COPY . .

# Build the project
RUN ./gradlew build --no-daemon

# Second stage: use the minimal runtime image
FROM eclipse-temurin:23-jdk-alpine

WORKDIR /app

COPY --from=builder /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
