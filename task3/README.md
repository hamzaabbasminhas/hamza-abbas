# Pet Store API Automation Framework

This is an automated testing framework for the Pet Store API, focusing on CRUD operations for pets. The framework uses REST Assured for API testing and TestNG for test execution.

## Technical Stack

- **Java 11**: Modern Java version with good language features and long-term support
- **Maven**: Dependency management and build tool
- **TestNG**: Testing framework with powerful features like parallel execution and test prioritization
- **REST Assured**: Java DSL for testing REST APIs
- **Jackson**: JSON serialization/deserialization
- **Docker**: Containerization for consistent test execution

## Project Structure

```
task3/
├── src/
│   ├── main/java/com/petstore/
│   │   ├── model/
│   │   │   └── Pet.java
│   │   └── service/
│   │       └── PetService.java
│   └── test/java/com/petstore/
│       └── tests/
│           └── PetTests.java
├── pom.xml
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Setup Instructions

### Prerequisites

- Java 11 or higher
- Maven 3.6 or higher
- Docker and Docker Compose (for containerized execution)

### Local Setup

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd task3
   ```
3. Install dependencies:
   ```bash
   mvn clean install
   ```

### Docker Setup

1. Build the Docker image:
   ```bash
   docker build -t petstore-tests .
   ```

2. Run tests using Docker:
   ```bash
   docker run petstore-tests
   ```

   Or using Docker Compose:
   ```bash
   docker-compose up
   ```

## Running Tests

### Local Execution

1. Run all tests:
   ```bash
   mvn clean test
   ```

2. Run specific test class:
   ```bash
   mvn test -Dtest=PetTests
   ```

3. Run specific test method:
   ```bash
   mvn test -Dtest=PetTests#testCreatePet
   ```

### Docker Execution

1. Run all tests:
   ```bash
   docker run petstore-tests
   ```

2. Run specific test class:
   ```bash
   docker run petstore-tests mvn test -Dtest=PetTests
   ```

3. Run specific test method:
   ```bash
   docker run petstore-tests mvn test -Dtest=PetTests#testCreatePet
   ```

4. Using Docker Compose:
   ```bash
   docker-compose up
   ```

## Test Flow

The framework implements an end-to-end test flow for managing a pet:

1. **Create Pet** (`testCreatePet`):
   - Creates a new pet with predefined attributes
   - Verifies the pet is created successfully
   - Saves the pet ID for subsequent operations

2. **Get Pet** (`testGetPet`):
   - Retrieves the pet using the saved ID
   - Verifies the pet details

3. **Update Pet** (`testUpdatePet`):
   - Updates the pet's name and status
   - Verifies the changes are applied correctly

4. **Delete Pet** (`testDeletePet`):
   - Deletes the pet using its ID
   - Verifies the pet is deleted

## Petstore API Behavior Notes

The framework accounts for some specific behaviors of the Petstore API:

1. GET requests return a default pet named "doggie"
2. The API is stateless and doesn't maintain pet data between requests
3. Delete operations return a response instead of throwing exceptions

## Best Practices Implemented

1. **Design Principles**:
   - Separation of concerns (model, service, test layers)
   - DRY (Don't Repeat Yourself) through service layer
   - Single Responsibility Principle in each class

2. **Testing Practices**:
   - Test prioritization using TestNG's priority
   - Clear test method names describing the scenario
   - Proper assertions with meaningful messages
   - End-to-end flow testing

3. **Code Quality**:
   - Clean code structure
   - Meaningful variable names
   - Proper error handling
   - Comprehensive logging

4. **Containerization**:
   - Consistent test environment
   - Isolated dependencies
   - Easy deployment and execution
   - Volume mounting for test results

## Future Improvements

1. **Test Coverage**:
   - Add negative test cases
   - Test edge cases and error scenarios
   - Add data-driven tests

2. **Framework Enhancements**:
   - Add parallel test execution
   - Implement retry mechanism for flaky tests
   - Add more detailed logging
   - Implement test reporting

3. **CI/CD Integration**:
   - Add GitHub Actions workflow
   - Configure test reporting in CI
   - Add Docker image publishing

4. **Containerization**:
   - Add multi-stage builds
   - Implement test result reporting
   - Add health checks
   - Configure resource limits 