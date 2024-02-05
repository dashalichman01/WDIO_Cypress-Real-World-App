import page from './page';

const usernameField = '#username';
const passwordField = '#password';
const signInBtn = 'button[type="submit"]';
const username = 'h6[data-test="sidenav-username"]';
const errorMsg = '[data-test="signin-error"]'
const logoutBtn = '[data-test="sidenav-signout"]';

class LoginPage {

    async setUsername(username: string){
        await page.setValue(usernameField, username);
    }

    async setPassword(password: string){
        await page.setValue(passwordField, password);
    }

    async getUsername(){
        return await (await page.getElement(username)).getText();
    }

    async getErrorMsg(){
        return await (await page.getElement(errorMsg)).getText();
    }

    async clickOnSignInBtn(){
        await page.clickElement(signInBtn);
    }

    async logout(){
        await page.clickElement(logoutBtn);
    }

    async login (username: string, password: string) {
        await page.setValue(usernameField, username);
        await page.setValue(passwordField, password);
        await this.clickOnSignInBtn();
    }

    async isErrorMsgDisplayed(){
        return await page.isElementDisplayed(errorMsg);
    }

    async open () {
        await page.open('signin');
    }
}

export default new LoginPage();
