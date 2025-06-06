class BalancePage {
    // Locators
    get balanceLabel() {
        return $('id=com.monefy.app.lite:id/textViewWholeAmount'); // Balance button locator
    }

    async balanceAmount() {
        return await this.balanceLabel.getText();
    }
}

module.exports = new BalancePage(); 