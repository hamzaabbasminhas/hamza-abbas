const { env } = require('./env');

exports.config = {
  runner: 'local',
  specs: ['../tests/specs/**/*.js'],
  maxInstances: 1,

  capabilities: [{
    platformName: env.PLATFORM_NAME,
    'appium:deviceName': env.DEVICE_NAME,
    'appium:platformVersion': env.PLATFORM_VERSION,
    'appium:appPackage': env.APP_PACKAGE,
    'appium:appActivity': env.APP_ACTIVITY,
    'appium:automationName': 'UiAutomator2',
    'appium:noReset': false
  }],

  logLevel: 'info',
  waitforTimeout: 10000,

  services: [
    ['appium', {
      args: {
        port: 4723
      }
    }]
  ],

  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
