require('dotenv').config();

const env = {
    DEVICE_NAME: process.env.DEVICE_NAME || 'emulator-5554',
    PLATFORM_VERSION: process.env.PLATFORM_VERSION || '16',
    APP_PACKAGE: process.env.APP_PACKAGE || 'com.monefy.app.lite',
    APP_ACTIVITY: process.env.APP_ACTIVITY || 'com.monefy.activities.main.MainActivity_',
    PLATFORM_NAME: process.env.PLATFORM_NAME || 'Android',
    FULL_RESET: process.env.FULL_RESET || true
};

module.exports = { env }; 