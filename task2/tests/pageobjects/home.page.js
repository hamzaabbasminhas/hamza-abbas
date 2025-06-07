class HomePage {
    // Locators
    get addExpenseButton() {
        return $('id=com.monefy.app.lite:id/expense_button'); // Add expense button locator
    }

    get addIncomeButton() {
        return $('id=com.monefy.app.lite:id/income_button'); // Add income button locator
    }

    get balanceButton() { 
        return $('id=com.monefy.app.lite:id/balance_container'); // Balance button locator
     }

    async openAddExpense() {
        await this.addExpenseButton.click();
    }

    async openAddIncome() {
        await this.addIncomeButton.click();
    }

    async openBalance() {
        await this.balanceButton.click();
    }
}

module.exports = new HomePage(); 