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
  }
}; 

