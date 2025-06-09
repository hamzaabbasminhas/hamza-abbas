require('dotenv').config();

exports.config = {
    runner: 'local',
    specs: ['../tests/specs/**/*.js'],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: process.env.PLATFORM_NAME || 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': process.env.DEVICE_NAME || 'emulator-5554',
        'appium:platformVersion': process.env.PLATFORM_VERSION || '16',
        'appium:appPackage': process.env.APP_PACKAGE || 'com.monefy.app.lite',
        'appium:appActivity': process.env.APP_ACTIVITY || 'com.monefy.activities.main.MainActivity_',
        'appium:noReset': false
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            addConsoleLogs: true,
            addRequestLogs: true,
            addResponseLogs: true,
            addTestBody: true,
            addArguments: true,
            addEnvironmentInfo: true,
            addSystemInfo: true,
            addBrowserInfo: true,
            addDeviceInfo: true,
            addAppInfo: true,
            addSessionInfo: true,
            addTestInfo: true,
            addStepInfo: true,
            addAttachment: true,
            addVideo: true,
            addScreenshot: true,
            addLogs: true,
            addError: true,
            addStacktrace: true,
            addDescription: true,
            addTags: true,
            addLinks: true,
            addIssue: true,
            addTms: true,
            addSeverity: true,
            addOwner: true,
            addLead: true,
            addEpic: true,
            addFeature: true,
            addStory: true,
            addSuite: true,
            addTest: true,
            addStep: true
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: async function () {
        await browser.setWindowSize(1920, 1080);
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot();
        }
    }
};
