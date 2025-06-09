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
  - `helpers.js`: Centralized utility functions for common operations
    - `enterAmount()`: Handles numeric input across the app
    - `waitUntilVisible()`: Standardized element visibility checks
    - `logStep()`: Allure step logging for better test reporting

### 2. Configuration Management
- Environment-specific configurations
- Separate config files for different platforms
- Easy to add new environments or platforms

### 3. Test Organization
- Tests organized by feature/flow
- Clear separation of concerns
- Easy to add new test cases
- Onboarding handled as a prerequisite in beforeEach hook
- Separate test files for different operations (add, edit, etc.)

### 4. Reporting
- Detailed Allure reports with step-by-step logging
- Screenshots on failure
- Test execution timeline
- Environment details
- Error messages and stack traces

## Test Scenarios Covered

The framework currently automates the following key user flows, based on the exploratory testing insights:

1. **Add Income** – A core financial operation verifying input and balance update.
2. **Add Expense** – The most frequently used function, tested across various categories and payment methods.
3. **Edit Income** – Ensures users can modify existing transactions and verify updated values in the history.

### Why These Scenarios?

The selected flows reflect the most critical and frequently used parts of the app from a financial user's perspective. They cover validation, data persistence, UI interaction, and balance calculations, making them ideal for end-to-end regression checks.

---

## Onboarding Flow Handling

Onboarding is conditionally handled before test execution using a centralized helper method. This keeps the tests DRY while ensuring a consistent starting point for each scenario.  
The helper checks if onboarding screens are present and completes them only when necessary.


## Project Structure

```task2/
├── config/                 # Configuration files
│   └── wdio.android.conf.js # Android configuration
├── tests/                 # Test files
│   ├── specs/            # Test specifications
│   │   ├── expense.spec.js    # Expense management tests
│   │   ├── income.spec.js     # Income addition tests
│   │   └── editIncome.spec.js # Income editing tests
│   └── pageobjects/      # Page Object classes
│       ├── expense.page.js
│       ├── income.page.js
│       ├── balance.page.js
│       ├── home.page.js
│       └── onboarding.page.js
├── utils/                 # Utility functions
│   └── helpers.js        # Shared helper functions
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

**If appium and uiautomator are not already installed on your machine**

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
```

## Reporting

### Allure Reports
The framework uses Allure for test reporting. After each test run, you can generate and view reports that include:

- Test execution summary
- Detailed test steps with timestamps
- Screenshots on failure
- Environment details
- Error messages and stack traces

### Test Logging
Each test step is logged using Allure's step functionality:
```javascript
await helpers.logStep('Step name', async () => {
    // Test actions
});
```

This provides:
- Clear step-by-step execution logs
- Automatic screenshots on failure
- Better test debugging capabilities
- Improved test maintenance

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

1. **Test Organization**
   - Each test file focuses on a specific feature
   - Onboarding is handled as a prerequisite in beforeEach hook
   - Separate test files for different operations (add, edit, etc.)

2. **Page Objects**
   - Each screen has its own page object
   - Locators are centralized in page objects
   - Reusable methods for common actions

3. **Test Data**
   - Test data is defined within test files
   - Clear variable names for test data
   - Consistent data format across tests

4. **Error Handling**
   - Screenshots on test failure
   - Detailed error messages
   - Proper cleanup after tests

5. **Maintainability**
   - DRY (Don't Repeat Yourself) principle
   - Clear and descriptive test names
   - Modular and reusable code structure
   - Centralized helper functions in `utils/helpers.js`
     - Common operations like `enterAmount()` are maintained in one place
     - Changes to input handling only need to be made once
     - Consistent behavior across all tests
   - Step-by-step logging for better debugging and maintenance


---

## Future Improvements

### 1. Test Coverage
- Add tests for expense editing functionality
- Implement tests for category management
- Add tests for different payment methods
- Include negative test scenarios (invalid inputs, error handling)

### 2. Framework Enhancements
- Implement parallel test execution for faster test runs
- Add retry mechanism for flaky tests
- Create custom test tags for better test organization
- Add data-driven testing support for multiple test scenarios

### 3. CI/CD Integration
- Set up GitHub Actions for automated test runs
- Implement test result notifications (Slack/Email)
- Add test environment management
- Create deployment pipeline for test artifacts

### 4. Code Quality
- Add ESLint for code quality checks
- Implement pre-commit hooks for code formatting
- Add TypeScript support for better type safety
- Create custom ESLint rules for test best practices
