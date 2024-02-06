import registrationPage from '../pageobjects/registration.page'
import generator from '../helper/generator'

describe('Registration tests', () => {
    beforeEach(async()=>{
        await registrationPage.open()
    })

    it('try to sign up without username', async()=>{
        const password = await  generator.randomPassword();
        await registrationPage.setFirstName(await generator.randomFirstName());
        await registrationPage.setLastName(await generator.randomLastName());
        await registrationPage.setPassword(password);
        await registrationPage.setConfirmedPassword(password);
        await expect (await registrationPage.isSignUpClickable()).toBeFalsy();
    })

    it('should sign up with valid credentials', async()=>{
        const password = await generator.randomPassword();
        await registrationPage.setFirstName(await generator.randomFirstName());
        await registrationPage.setLastName(await generator.randomLastName());
        await registrationPage.setUsername(await generator.randomUsername());
        await registrationPage.setPassword(password);
        await registrationPage.setConfirmedPassword(password);
        await registrationPage.clickSignUpBtn();
        await browser.pause(3000);
        await expect(await browser.getUrl()).toContain('signin');
    })

    it('should sign up with wrong confirmed password', async()=>{
        await registrationPage.setFirstName(await generator.randomFirstName());
        await registrationPage.setLastName(await generator.randomLastName());
        await registrationPage.setUsername(await generator.randomUsername());
        await registrationPage.setPassword(await generator.randomPassword());
        await registrationPage.setConfirmedPassword(await generator.randomPassword());
        await expect (await registrationPage.isConfirmPasswordErrorTextDisplayed()).toBeTruthy();
    })
})