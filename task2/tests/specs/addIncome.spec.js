const IncomePage = require('../pageobjects/income.page');
const HomePage = require('../pageobjects/home.page');
const OnboardingPage = require('../pageobjects/onboarding.page');
const BalancePage = require('../pageobjects/balance.page');
const helpers = require('../../utils/helpers');

describe('Monefy Income Management', () => {
    beforeEach(async () => {
        await helpers.logStep('Complete onboarding process', async () => {
            await OnboardingPage.completeOnboarding();
        });
    });

    it('should add a basic income with card payment and deposits category successfully', async () => {
        const amount = '100';
        const category = 'Deposits';

        await helpers.logStep('Add new income', async () => {
            await HomePage.openAddIncome();
            await IncomePage.enterAmount(amount);
            await IncomePage.selectPaymentCard();
            await IncomePage.selectCategory(category);
        });
       
        await helpers.logStep('Verify balance and transaction details', async () => {
            await HomePage.openBalance();
            await BalancePage.verifyBalanceAmount(amount);
            await BalancePage.verifyTransactionCategory(category);
        });
    });
}); 