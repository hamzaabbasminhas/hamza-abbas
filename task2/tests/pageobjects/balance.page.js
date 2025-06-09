class BalancePage {
    // Locators
    get balanceLabel() {
        return $('id=com.monefy.app.lite:id/textViewWholeAmount'); 
    }

    get transactionCategoryLabel() {
        return $('id=com.monefy.app.lite:id/textViewCategoryName'); 
    }

    get keyBoardClearButton() {
        return $('id=com.monefy.app.lite:id/buttonKeyboardClear'); 
    }

    get incomeDetails() {
        return $('id=com.monefy.app.lite:id/textViewTransactionAmount');
    }

    async balanceAmount() {
        return await this.balanceLabel.getText();
    }

    async transactionCategory() {
        return await this.transactionCategoryLabel.getText();
    }

    async verifyBalanceAmount(amount) {
        const balance = await this.balanceAmount();
        expect(balance).toContain(amount);
    }

    async verifyTransactionCategory(category) {
        const transactionCategory = await this.transactionCategory();
        expect(transactionCategory).toContain(category);
    }
    async editTransactionAmount(amount) {
        await this.incomeDetails.click();
    }
    
    async openDetailsOfLastTransaction() {
        await this.balanceLabel.click();
    }
    async clearKeyboard() {
        await this.keyBoardClearButton.click();
    }
}

module.exports = new BalancePage(); 