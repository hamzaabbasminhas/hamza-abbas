class BalancePage {
    // Locators
    get balanceLabel() {
        return $('id=com.monefy.app.lite:id/textViewWholeAmount'); // Balance button locator
    }

    get transactionCategoryLabel() {
        return $('id=com.monefy.app.lite:id/textViewCategoryName'); // Transaction category label locator
    }

    async balanceAmount() {
        return await this.balanceLabel.getText();
    }

    async transactionCategory() {
        return await this.transactionCategoryLabel.getText();
    }
}

module.exports = new BalancePage(); 