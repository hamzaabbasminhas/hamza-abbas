const ExpensePage = require('../pageobjects/expense.page');
const HomePage = require('../pageobjects/home.page');
const OnboardingPage = require('../pageobjects/onboarding.page');
const BalancePage = require('../pageobjects/balance.page');

describe('Monefy Expense Management', () => {
    beforeEach(async () => {
        await OnboardingPage.completeOnboarding();
    });

    it('should add an expense with card payment and bills category', async () => {
        const amount = '200';
        const category = 'Bills';

        await HomePage.openAddExpense();
        
        await ExpensePage.enterAmount(amount);
        await ExpensePage.selectPaymentCard();
        await ExpensePage.selectCategory(category);
        
        await HomePage.openBalance();

        await BalancePage.verifyBalanceAmount(amount);
        await BalancePage.verifyTransactionCategory(category);
    });
}); 