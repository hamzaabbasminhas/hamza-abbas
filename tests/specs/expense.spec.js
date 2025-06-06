const ExpensePage = require('../pageobjects/expense.page');
const HomePage = require('../pageobjects/home.page');
const OnboardingPage = require('../pageobjects/onboarding.page');
const BalancePage = require('../pageobjects/balance.page');
const helpers = require('../../utils/helpers');

describe('Monefy Expense Management', () => {
    beforeEach(async () => {
        await OnboardingPage.completeOnboarding();
    });

    // it('should add a basic expense successfully', async () => {
    //     const amount = '100';

    //     await HomePage.addExpenseButton.click();
    //     await helpers.enterAmount(amount);
    //     await ExpensePage.categoryButton.click();
    //     await ExpensePage.billsCategory.click();

    //     await HomePage.balanceButton.click();
    //     const balance = await BalancePage.balanceAmount();
    //     expect(balance).toContain(amount);
    // });

    it('should add an expense with card payment and bills category', async () => {
        const amount = '200';

        await HomePage.addExpenseButton.click();
        await helpers.enterAmount(amount);
        await ExpensePage.paymentIcon.click();
        await ExpensePage.cardInput.click();
        await ExpensePage.categoryButton.click();
        await ExpensePage.billsCategory.click();

        await HomePage.balanceButton.click();
        const balance = await BalancePage.balanceAmount();
        const transactionCategory = await BalancePage.transactionCategory();

        expect(balance).toContain(amount);
        expect(transactionCategory).toContain('Bills');
    });
}); 