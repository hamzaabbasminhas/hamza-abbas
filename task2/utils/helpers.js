const { $ } = require('@wdio/globals');
const allure = require('@wdio/allure-reporter').default;

module.exports = {
  async waitUntilVisible(element, timeout = 10000) {
    await element.waitForDisplayed({ timeout });
  },
  async enterAmount(amount) {
    const digits = amount.toString().split('');

    console.log(digits);

    for (const digit of digits) {
      const button = await $(`id=com.monefy.app.lite:id/buttonKeyboard${digit}`);
      await button.click();
    }
  },
  /**
   * Logs a step to Allure report
   * @param {string} stepName - Name of the step
   * @param {Function} stepFn - Function to execute for this step
   */
  async logStep(stepName, stepFn) {
    return await allure.step(stepName, async () => {
      try {
        return await stepFn();
      } catch (error) {
        allure.addAttachment('Error Screenshot', await browser.takeScreenshot(), 'image/png');
        throw error;
      }
    });
  },
  /**
   * Adds a description to the test in Allure report
   * @param {string} description - Description to add
   */
  addDescription(description) {
    allure.addDescription(description);
  },
  /**
   * Adds an attachment to the Allure report
   * @param {string} name - Name of the attachment
   * @param {string|Buffer} content - Content to attach
   * @param {string} type - MIME type of the content
   */
  addAttachment(name, content, type) {
    allure.addAttachment(name, content, type);
  }
}; 

