# Monefy Mobile Automation Framework

This project implements an automated testing framework for the Monefy mobile application using WebdriverIO and Appium.

## Tech Stack

- **WebdriverIO (v9.15.0)**: Automation framework
- **Appium (v2.4.1)**: Mobile automation tool
- **UiAutomator2**: Android automation driver
- **Allure**: Test reporting framework

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

## Project Structure

```
task2/
├── config/                 # Configuration files
│   └── wdio.android.conf.js # Android configuration
├── tests/                 # Test files
│   ├── specs/            # Test specifications
│   │   ├── expense.spec.js
│   │   └── income.spec.js
│   │   └── onboarding.spec.js
│   └── pageobjects/      # Page Object classes
│       ├── expense.page.js
│       ├── income.page.js
│       ├── balance.page.js
│       └── home.page.js
│       └── onboarding.page.js
├── utils/                 # Utility functions
├── package.json          # Dependencies and scripts
└── .env                 # Environment variables
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Java JDK 11 or higher
- Android SDK
- Appium (v2.4.1)
- UiAutomator2 Driver
- Android Emulator with Monefy app installed

### Environment Setup

1. Start your Android emulator and ensure Monefy app is installed on it

2. Configure `.env` file with your emulator details:
   ```env
   DEVICE_NAME=emulator-5554  # your emulator's device ID
   PLATFORM_VERSION=13        # your Android version
   PLATFORM_NAME=Android
   APP_PACKAGE=com.monefy.app.lite
   APP_ACTIVITY=com.monefy.activities.main.MainActivity_
   ```

### Installation Steps

1. Install Appium globally:
   ```bash
   npm install -g appium@2.4.1
   ```

2. Install UiAutomator2 driver:
   ```bash
   appium driver install uiautomator2
   ```

3. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task2
   ```

4. Install dependencies:
   ```bash
   npm install
   ```
## Running Tests

### Local Execution
```bash
# Run all tests
npm test

# Run Android tests
npm run test:android
```

## Reporting

### Allure Reports
The framework uses Allure for test reporting. After each test run, you can generate and view reports that include:

- Test execution summary
- Detailed test steps
- Screenshots on failure
- Environment details
- Error messages and stack traces

### Generating Reports
```bash
# Generate and open report
npm run report

# Generate report only
npm run report:generate

# Open existing report
npm run report:open
```

## Best Practices

1. **Code Organization**
   - Page Object Pattern
   - Reusable utility functions
   - Environment-based configuration

2. **Error Handling**
   - Screenshot capture on failure
   - Detailed logging

## Future Improvements

1. **Cross-Platform Support**
   - Add iOS test configuration
   - Platform-specific utilities

2. **CI/CD Integration**
   - Add GitHub Actions workflow
   - Configure test reporting in CI

3. **Test Coverage**
   - Add more test scenarios
   - Implement visual testing

4. **Framework Enhancements** 