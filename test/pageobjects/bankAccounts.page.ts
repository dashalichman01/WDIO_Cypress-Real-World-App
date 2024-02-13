import page from './page';

const bankAccountsBtn = '[data-test="sidenav-bankaccounts"]';
const createBtn = '[data-test="bankaccount-new"]';
const deleteBtn = '[data-test="bankaccount-delete"]';
const bankNameField = '#bankaccount-bankName-input';
const routingNumberField = '#bankaccount-routingNumber-input';
const accountNumberField = '#bankaccount-accountNumber-input';
const saveBtn = 'button[type="submit"]';
const routingNumberErrorMsg = '#bankaccount-routingNumber-input-helper-text';
const bankAccountNumberErrorMsg = '#bankaccount-accountNumber-input-helper-text';

class BankAccountsPage{

    async setBankName(bankName: string){
        await page.setValue(bankNameField, bankName);
    }

    async setRoutingNumber(routingNumber: string){
        await page.setValue(routingNumberField, routingNumber);
    }

    async setAccountNumber(accountNumber: string){
        await page.setValue(accountNumberField, accountNumber);
    }

    async getRoutingNumberErrorMsg(){
        return await page.getElement(routingNumberErrorMsg);
    }

    async getBankAccountNumberErrorMsg(){
        return await page.getElement(bankAccountNumberErrorMsg);
    }

    async getAmountOfBankAccounts(){
        return await page.getAmount(deleteBtn);
    }

    async clickBankAccountsBtn(){
        await page.clickElement(bankAccountsBtn);
    }

    async clickCreateBtn(){
        await page.clickElement(createBtn);
    }

    async clickSaveBtn(){
        await page.clickElement(saveBtn);
    }

    async deleteLastAccount(){
        await page.clickElementByIndex(deleteBtn,  0);
    }

    async isRoutingNumberErrorMsgDisplayed(){
        return await page.isElementDisplayed(routingNumberErrorMsg);
    }

    async isBankAccountNumberErrorMsgDisplayed(){
        return await page.isElementDisplayed(bankAccountNumberErrorMsg);
    }
}

export default new BankAccountsPage();