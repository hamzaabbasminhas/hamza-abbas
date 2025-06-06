const helpers = require('../../utils/helpers');

class OnboardingPage {
  // Element getters using direct `id=` selectors
  get continueButton() {
    return $('id=com.monefy.app.lite:id/buttonContinue');
  }

  get allowNotificationsButton() {
    return $('id=com.android.permissioncontroller:id/permission_allow_button');
  }

  get crossButton() {
    return $('id=com.monefy.app.lite:id/buttonClose');
  }

  // Individual steps

  async getStarted() {
    await helpers.waitUntilVisible(this.continueButton);
    await this.continueButton.click();
  }

  async amazing() {
    await helpers.waitUntilVisible(this.continueButton);
    await this.continueButton.click();
  }

  async yesPlease() {
    await helpers.waitUntilVisible(this.continueButton);
    await this.continueButton.click();
  }

  async allowNotifications() {
    await helpers.waitUntilVisible(this.allowNotificationsButton);
    await this.allowNotificationsButton.click();
  }

  async iAmReady() {
    await helpers.waitUntilVisible(this.continueButton);
    await this.continueButton.click();
  }

  async cross() {
    await helpers.waitUntilVisible(this.crossButton);
    await this.crossButton.click();
  }

  // Complete flow
  async completeOnboarding() {
    await this.getStarted();
    await this.amazing();
    await this.yesPlease();
    await this.allowNotifications();
    await this.iAmReady();
    await this.cross();
  }
}

module.exports = new OnboardingPage();
