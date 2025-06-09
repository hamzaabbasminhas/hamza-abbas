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

    it('Edit income amount and verify balance', async () => {
        const amount = '1000';
        const category = 'Salary';

        await helpers.logStep('Add initial income', async () => {
            await HomePage.openAddIncome();
            await IncomePage.enterAmount(amount); 
            await IncomePage.selectCategory(category);
        });
       
        await helpers.logStep('Open balance and edit transaction', async () => {
            await HomePage.openBalance();
            await BalancePage.openDetailsOfLastTransaction();
            await BalancePage.editTransactionAmount(amount);

            // Click clear keyboard button as many times as the length of amount
            for (let i = 0; i < amount.length; i++) {
                await BalancePage.clearKeyboard();
            }

            await IncomePage.enterAmount('2000');
            await IncomePage.selectCategory(category);
        });

        await helpers.logStep('Verify updated balance', async () => {
            await BalancePage.verifyBalanceAmount('$2,000.00');
        });
    });
}); 