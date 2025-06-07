# Monefy Mobile Automation Framework

This project implements an automated testing framework for the Monefy mobile application using WebdriverIO and Appium. The framework is designed to be scalable, maintainable, and follows best practices in test automation.

## Tech Stack

### Core Technologies
- **WebdriverIO (v9.15.0)**: A progressive automation framework built on top of WebDriver protocol
- **Appium (v2.4.1)**: Cross-platform mobile automation tool
- **UiAutomator2**: Android automation driver
- **Mocha**: Test framework for structuring tests
- **Allure**: Reporting framework for detailed test reports

### Why This Stack?
1. **WebdriverIO**
   - Modern JavaScript-based framework
   - Built-in support for mobile testing
   - Rich ecosystem of plugins and services
   - Active community and regular updates

2. **Appium**
   - Industry standard for mobile automation
   - Cross-platform support (iOS and Android)
   - Large community and extensive documentation
   - Supports both native and hybrid apps

3. **UiAutomator2**
   - Native Android testing framework
   - Better performance than UiAutomator1
   - More stable and reliable
   - Better support for modern Android features

## Project Structure

```
task2/
├── config/                 # Configuration files
│   ├── wdio.conf.js       # Base WebdriverIO configuration
│   └── wdio.android.conf.js # Android-specific configuration
├── tests/                 # Test specifications
│   ├── onboarding.spec.js # Onboarding flow tests
│   ├── expense.spec.js    # Expense management tests
│   └── income.spec.js     # Income management tests
├── utils/                 # Utility functions and helpers
├── package.json          # Project dependencies and scripts
└── appium-inspector-config.json # Appium Inspector configuration
```

## Scalability and Maintainability Features

### 1. Modular Architecture
- **Page Object Pattern**: Each screen is represented by a separate class
- **Component-based Structure**: Reusable components for common elements
- **Utility Functions**: Shared helper methods for common operations

### 2. Configuration Management
- Environment-specific configurations
- Separate config files for different platforms
- Easy to add new environments or platforms

### 3. Test Organization
- Tests organized by feature/flow
- Clear separation of concerns
- Easy to add new test cases

### 4. Reporting
- Detailed Allure reports
- Screenshots on failure
- Step-by-step test execution logs

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Java JDK 11 or higher
- Android SDK

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task2
   ```

2. Install dependencies (this will automatically install Appium and UiAutomator2):
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the project root
   - Add required environment variables (see `.env.example`)

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Android Tests
```bash
npm run test:android
```

### Generate Report
```bash
npm run report
```

## Best Practices Implemented

### 1. Code Organization
- Clear directory structure
- Separation of test logic and page objects
- Reusable utility functions

### 2. Error Handling
- Comprehensive error messages
- Screenshot capture on failure
- Detailed logging

### 3. Test Data Management
- Environment-specific test data
- Data-driven test approach
- Easy to maintain test data

### 4. Reporting
- Detailed Allure reports
- Test execution history
- Failure analysis tools

## Future Improvements

1. **Cross-Platform Support**
   - Add iOS test configuration
   - Implement platform-specific utilities

2. **CI/CD Integration**
   - Add GitHub Actions workflow
   - Configure test reporting in CI
   - Add test result notifications

3. **Test Coverage**
   - Add more test scenarios
   - Implement visual testing
   - Add performance testing

4. **Framework Enhancements**
   - Add parallel test execution
   - Implement retry mechanism
   - Add more detailed logging 