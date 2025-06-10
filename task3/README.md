# PetStore API Automation

This project contains automated tests for the PetStore API using Rest Assured, TestNG, and Extent Reports.

## Approach

The test automation framework follows a service-oriented architecture with the following key principles:

1. **Independent Test Execution**
   - Each test is designed to run independently
   - Tests automatically create required test data if needed
   - No test depends on the state from other tests
   - This makes tests more reliable and easier to debug

2. **Service Layer Abstraction**
   - API calls are encapsulated in a service layer (`PetService`)
   - Tests interact with the service layer instead of making direct API calls
   - This separation of concerns makes the code more maintainable

3. **Smart Test Data Management**
   - Test data creation is handled automatically when needed
   - No hardcoded test data or IDs
   - Reduces test maintenance overhead

## Tech Stack

1. **Java 11**
   - Strong typing and object-oriented features
   - Rich ecosystem of testing libraries
   - Excellent IDE support and debugging capabilities

2. **Rest Assured**
   - Fluent API for REST testing
   - Built-in support for JSON/XML validation
   - Easy to read and maintain test code
   - Automatic logging of requests and responses

3. **TestNG**
   - Powerful test organization with groups and priorities
   - Flexible test execution control
   - Rich reporting capabilities
   - Parallel test execution support

4. **Extent Reports**
   - Beautiful and informative test reports
   - Step-by-step test execution details
   - Request/response logging
   - Test history and trends

## Scalability and Maintainability

1. **Easy to Add New Tests**
   - Service layer handles all API interactions
   - Tests only need to focus on business logic
   - New tests can reuse existing service methods

2. **Maintainable Code Structure**
   - Clear separation of concerns:
     - `service`: API interactions
     - `tests`: Test logic
     - `model`: Data models
     - `config`: Configuration management
     - `utils`: Utility functions
     - `reporting`: Reporting utilities
   - Each component has a single responsibility
   - Easy to modify one component without affecting others

3. **Robust Error Handling**
   - Service layer handles API errors
   - Tests focus on business validations
   - Clear error messages and logging

4. **Flexible Test Execution**
   - Run individual tests or groups
   - Easy to add new test groups
   - Support for different test configurations

5. **Comprehensive Reporting**
   - Detailed test execution logs
   - Request/response details
   - Environment information
   - Test history and trends

## Prerequisites

- Java 11 or higher
- Maven 3.6 or higher
- Docker (optional, for containerized execution)

## Project Structure

```
task3/
├── src/
│   ├── main/
│   │   └── java/
│   │       └── com/
│   │           └── petstore/
│   │               ├── config/
│   │               │   └── ConfigManager.java
│   │               ├── model/
│   │               │   └── Pet.java
│   │               ├── reporting/
│   │               │   └── AllureManager.java
│   │               ├── service/
│   │               │   └── PetService.java
│   │               ├── tests/
│   │               │   └── PetTests.java
│   │               └── utils/
│   │                   └── TestUtils.java
│   └── test/
│       └── resources/
│           └── testng.xml
├── allure-results/
├── test-output/
├── target/
├── .dockerignore
├── .gitignore
├── docker-compose.yml
├── Dockerfile
└── pom.xml
```

## Running Tests

### Run All Tests
```bash
mvn clean test
```

### Run Individual Tests
You can run individual test groups using Maven profiles:

```bash
# Run only create tests
mvn clean test -P create

# Run only update tests
mvn clean test -P update
```

## Test Groups

The tests are organized into the following groups:

1. `create` - Tests for creating new pets
2. `read` - Tests for retrieving pet information
3. `update` - Tests for updating pet information
4. `delete` - Tests for deleting pets
5. `crud` - Complete CRUD sequence tests

Each test is designed to run independently. If a test requires a pet to exist, it will automatically create one if needed.

## Test Cases

1. Create Pet
   - Group: `create`
   - Description: Creates a new pet and verifies the response

2. Get Pet
   - Group: `read`
   - Description: Retrieves a pet by ID and verifies the response

3. Update Pet
   - Group: `update`
   - Description: Updates an existing pet and verifies the changes

4. Delete Pet
   - Group: `delete`
   - Description: Deletes a pet and verifies the deletion

## Test Dependencies

Each test is designed to be independent:
- If a test needs a pet to exist, it will automatically create one
- Tests can be run individually or as part of the full CRUD sequence
- No test depends on the state from other tests

## Reports

After running the tests, you can find the Extent Reports in:
- `test-output/ExtentReport.html`

### Viewing Extent Reports

1. Navigate to the `test-output` directory
2. Open `ExtentReport.html` in any web browser
3. The report includes:
   - Test execution summary
   - Detailed test steps
   - Request and response information
   - Test status (Pass/Fail)
   - System information
   - Timestamps for each step

### Report Features

The Extent Reports include:
- Test execution summary with pass/fail statistics
- Detailed test steps with timestamps
- Request and response information for API calls
- System information and environment details
- Screenshots (if configured)
- Test execution time
- Test history and trends

## Docker Support

The project includes Docker support for containerized test execution:

1. Build the Docker image:
```bash
docker build -t petstore-tests .
```

2. Run tests in Docker:
```bash
docker-compose up
```

The Docker setup includes:
- Java 11 base image
- Maven for dependency management
- Extent Reports support
- Volume mounting for test results 