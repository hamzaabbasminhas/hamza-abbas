const helpers = require('../../utils/helpers');

class IncomePage {
    // Locators   

    get amountInput() {
        return $('id=com.monefy.app.lite:id/amount_text'); // Amount input field locator
    }

    get categoryButton() {
        return $('id=com.monefy.app.lite:id/keyboard_action_button'); // Category selection button locator
    }

    get paymentIcon() {
        return $('id=com.monefy.app.lite:id/icon'); // Note input field locator
    }

    get cardInput() {
        return $('//android.widget.TextView[@resource-id="com.monefy.app.lite:id/title" and @text="Payment card"]'); // Card input field locator
    }

    get depositsCategory() {
        return $('//android.widget.GridView[@resource-id="com.monefy.app.lite:id/gridViewCategories"]/android.widget.FrameLayout[1]/android.widget.LinearLayout'); // Bills category locator
    }

    get salaryCategory() {
        return $('//android.widget.GridView[@resource-id="com.monefy.app.lite:id/gridViewCategories"]/android.widget.FrameLayout[2]'); // Cars category locator
    }

    async enterAmount(amount) {
        await helpers.enterAmount(amount);
    }

    async selectPaymentCard() {
        await this.paymentIcon.click();
        await this.cardInput.click();
    }

    async selectCategory(category) {
        await this.categoryButton.click();
        if (category === 'Deposits') {
            await this.depositsCategory.click();
        } else if (category === 'Salary') {
            await this.salaryCategory.click();
        }
    }

}

module.exports = new IncomePage(); 