import bankAccountsPage from '../pageobjects/bankAccounts.page';
import loginPage from '../pageobjects/login.page';
import generator from '../helper/generator';

describe('Bank accounts tests', ()=>{

    before(async()=>{
        await loginPage.open();
        await loginPage.login(''+process.env.USER, ''+process.env.PASSWORD);
    })

    beforeEach(async()=>{
        await bankAccountsPage.clickBankAccountsBtn();
    })

    it('should create bank account with wrong routing number', async()=>{
        await bankAccountsPage.clickCreateBtn();
        await bankAccountsPage.setBankName(await generator.randomBankName());
        await bankAccountsPage.setRoutingNumber(await generator.wrongRoutingNumber());
        await expect(bankAccountsPage.isRoutingNumberErrorMsgDisplayed()).toBeTruthy();
        await expect(await bankAccountsPage.getRoutingNumberErrorMsg()).toHaveText('Must contain a valid routing number');
    })

    it('should create bank account with wrong account number', async()=>{
        await bankAccountsPage.clickCreateBtn();
        await bankAccountsPage.setBankName(await generator.randomBankName());
        await bankAccountsPage.setRoutingNumber(await generator.randomRoutingNumber());
        await bankAccountsPage.setAccountNumber(await generator.wrongRoutingNumber());
        await expect(bankAccountsPage.isBankAccountNumberErrorMsgDisplayed()).toBeTruthy();
        await expect(await bankAccountsPage.getBankAccountNumberErrorMsg()).toHaveText('Must contain at least 9 digits');
    })

    it('should create new bank account', async()=>{
        await bankAccountsPage.clickCreateBtn();
        await bankAccountsPage.setBankName(await generator.randomBankName());
        await bankAccountsPage.setRoutingNumber(await generator.randomRoutingNumber());
        await bankAccountsPage.setAccountNumber(await generator.randomAccountNumber());
        await bankAccountsPage.clickSaveBtn();
        await expect(await browser.getUrl()).toContain('bankaccounts');
    })

    it('should delete bank account', async()=>{
        const accountsBeforeDeleting = (await bankAccountsPage.getDeleteBtns()).length;
        await bankAccountsPage.deleteLastAccount();
        await browser.refresh();
        const accountsAfterDeleting = (await bankAccountsPage.getDeleteBtns()).length;
        await expect(accountsAfterDeleting).toEqual(accountsBeforeDeleting - 1);
    })
})