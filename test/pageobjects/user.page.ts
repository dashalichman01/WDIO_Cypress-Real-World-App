import page from './page';
import { Key } from 'webdriverio';

const myAccountBtn = '[data-test="sidenav-user-settings"]';
const firstnameField = '#user-settings-firstName-input';
const lastnameField = '#user-settings-lastName-input';
const saveBtn = '[data-test="user-settings-submit"]';
const username = '[data-test="sidenav-user-full-name"]';

class UserPage{

    async clearInputValue(element: string){
        const field = await page.getElement(element);
        await field.doubleClick();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Ctrl]);
        await browser.keys(Key.Delete); 
    }

    async setFirstname(firstname: string){
        await this.clearInputValue(firstnameField);
        await page.setValue(firstnameField, firstname);
    }

    async setLastname(lastname: string){
        await this.clearInputValue(lastnameField);
        await page.setValue(lastnameField, lastname);
    }

    async clickMyAccountBtn(){
        await page.clickElement(myAccountBtn);
    }

    async clickSaveBtn(){
        await page.clickElement(saveBtn);
    }

    async getUsername(){
        return await (await page.getElement(username)).getText();
    }
}

export default new UserPage();