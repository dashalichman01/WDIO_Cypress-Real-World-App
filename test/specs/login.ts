import generator from '../helper/generator';
import loginPage from '../pageobjects/login.page'

describe('Login tests', () => {
    beforeEach(async()=>{
        await loginPage.open();
    })
    
    it('should login with valid credentials', async () => {
        await loginPage.login(''+process.env.USER, ''+process.env.PASSWORD);
        await expect(await loginPage.getUsername()).toEqual('@Katharina_Bernier');
        await loginPage.logout();
    }),

    it('should login with invalid username', async()=>{
        await loginPage.login(await generator.randomUsername(), ''+process.env.PASSWORD);
        await expect(loginPage.isErrorMsgDisplayed).toBeTruthy();
        await expect(await loginPage.getErrorMsg()).toEqual('Username or password is invalid');
    }),

    it('should login with invalid password', async()=>{
        await loginPage.login(''+process.env.USER, await generator.randomPassword());
        await expect(loginPage.isErrorMsgDisplayed).toBeTruthy();
        await expect(await loginPage.getErrorMsg()).toEqual('Username or password is invalid');
    })

    it('should logout', async()=>{
        await loginPage.login(''+process.env.USER, ''+process.env.PASSWORD);
        await loginPage.logout();
        await browser.pause(2000);
        await expect(await browser.getUrl()).toContain('signin');
    })
})


