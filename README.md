## 🚀 Getting Started

Follow these steps to run the project locally using Docker:

### 1. Clone the Repository

```bash
git clone https://github.com/geoHayekGeek/job-assessment.git
```

### 2. Create a postgreSQL database

### 3. Configure the Backend
Navigate to backend/src/main/resources/application.properties and update the following values:

```bash
spring.datasource.url=jdbc:postgresql://host.docker.internal:{port}/{database}
spring.datasource.username={username}
spring.datasource.password={password}
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
Replace {port}, {database}, {username}, and {password} with your PostgreSQL credentials.

### 4. Start the Application
Run the following command to build and start all services in the root directory (job-assessment):

```bash
docker compose up --build
```

### 5. Access the App
Once Docker has started the services, visit: http:localhost:3000
