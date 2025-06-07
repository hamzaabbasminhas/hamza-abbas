const IncomePage = require('../pageobjects/income.page');
const HomePage = require('../pageobjects/home.page');
const OnboardingPage = require('../pageobjects/onboarding.page');
const BalancePage = require('../pageobjects/balance.page');

describe('Monefy Income Management', () => {
    beforeEach(async () => {
        await OnboardingPage.completeOnboarding();
    });

    it('should add a basic income with card payment and deposits category successfully', async () => {
        const amount = '100';
        const category = 'Deposits';

        await HomePage.openAddIncome();
       
        await IncomePage.enterAmount(amount);
        await IncomePage.selectPaymentCard();
        await IncomePage.selectCategory(category);
       
        await HomePage.openBalance();

        await BalancePage.verifyBalanceAmount(amount);
        await BalancePage.verifyTransactionCategory(category);
    });
}); 