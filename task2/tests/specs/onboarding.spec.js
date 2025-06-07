const onboardingPage = require('../pageobjects/onboarding.page');

describe('Monefy Onboarding Flow', () => {
  it('should complete onboarding successfully', async () => {
    await onboardingPage.completeOnboarding();
  });
}); 