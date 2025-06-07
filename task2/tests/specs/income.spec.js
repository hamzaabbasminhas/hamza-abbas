const IncomePage = require('../pageobjects/income.page');
const HomePage = require('../pageobjects/home.page');
const OnboardingPage = require('../pageobjects/onboarding.page');
const BalancePage = require('../pageobjects/balance.page');
const helpers = require('../../utils/helpers');

describe('Monefy Income Management', () => {
    beforeEach(async () => {
        await OnboardingPage.completeOnboarding();
    });

    it('should add a basic income successfully', async () => {
        const amount = '100';

        await HomePage.addIncomeButton.click();
        await helpers.enterAmount(amount);
        await IncomePage.categoryButton.click();
        await IncomePage.depositsCategory.click();

        await HomePage.balanceButton.click();
        const balance = await BalancePage.balanceAmount();
        expect(balance).toContain(amount);
    });
}); 