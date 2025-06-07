# Pet Store API Automation

This project contains automated tests for the Pet Store API using Rest Assured, TestNG, and ExtentReports.

## Project Structure

```
src/
├── main/java/com/petstore/
│   ├── config/         # Configuration classes
│   ├── model/          # Data models
│   ├── reporting/      # Reporting utilities
│   └── service/        # API service classes
└── test/
    ├── java/com/petstore/tests/    # Test classes
    └── resources/      # Test configuration files
```

## Prerequisites

- Java 11 or higher
- Maven 3.6 or higher

## Dependencies

- Rest Assured 5.3.0
- TestNG 7.7.1
- ExtentReports 5.1.1
- SLF4J 2.0.9
- Freemarker 2.3.32

## Setup

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   mvn clean install
   ```

## Running Tests

To run all tests:
```bash
mvn clean test
```

## Test Reports

After test execution, the ExtentReports report will be generated in:
```
test-output/ExtentReport.html
```

Open this file in your web browser to view the test results.

## Test Cases

The project includes the following test cases:

1. Create Pet
   - Creates a new pet with specified details
   - Verifies the pet is created successfully

2. Get Pet
   - Retrieves a pet by ID
   - Verifies the retrieved pet details

3. Update Pet
   - Updates an existing pet's information
   - Verifies the update is successful

4. Delete Pet
   - Deletes a pet by ID
   - Verifies the deletion is successful

## API Endpoints

Base URL: `https://petstore.swagger.io/v2`

Endpoints:
- POST `/pet` - Create a new pet
- GET `/pet/{petId}` - Get pet by ID
- PUT `/pet` - Update pet
- DELETE `/pet/{petId}` - Delete pet

## Report Features

The ExtentReports report includes:
- Test execution summary
- Detailed test steps
- Request and response information
- Test status (Pass/Fail)
- System information
- Timestamps for each step 