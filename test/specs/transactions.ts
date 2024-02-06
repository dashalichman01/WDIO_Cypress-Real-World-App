import transactionsPage from '../pageobjects/transactions.page';
import loginPage from '../pageobjects/login.page';
import generator from '../helper/generator';

describe('Transactions tests', ()=>{
    before(async()=>{
        await loginPage.open();
        await loginPage.login(''+process.env.USER, ''+process.env.PASSWORD);
    })

    beforeEach(async()=>{
        await transactionsPage.clickHomeBtn();
    })

    it('should create new pay transaction', async()=>{
        const amountOfTransaction = (await generator.randomAmount()).toString();
        const note = await generator.randomNote();
        await transactionsPage.clickNewBtn();
        await transactionsPage.clickOnUser();
        await transactionsPage.setAmount(amountOfTransaction);
        await transactionsPage.setNote(note);
        await transactionsPage.clickPayBtn();
        await expect(transactionsPage.isSuccessMsgDisplayed()).toBeTruthy();
        await expect(await transactionsPage.getSuccessMsg()).toEqual(`Paid $${amountOfTransaction}.00 for ${note}`);
    })

    it('should create new request transaction', async()=>{
        const amountOfTransaction = (await generator.randomAmount()).toString();
        const note = await generator.randomNote();
        await transactionsPage.clickNewBtn();
        await transactionsPage.clickOnUser();
        await transactionsPage.setAmount(amountOfTransaction);
        await transactionsPage.setNote(note);
        await transactionsPage.clickRequestBtn();
        await expect(transactionsPage.isSuccessMsgDisplayed()).toBeTruthy();
        await expect(await transactionsPage.getSuccessMsg()).toEqual(`Requested $${amountOfTransaction}.00 for ${note}`);
    })

    it('should add comment to transaction', async()=>{
        const comment = await generator.randomNote();
        await transactionsPage.clickOnTransaction();
        await transactionsPage.writeComment(comment);
        await expect(await transactionsPage.getCommentItem()).toEqual(comment);
    })

    it('should add another comment to transaction', async()=>{
        const comment = await generator.randomNote();
        await transactionsPage.clickOnTransaction();
        await transactionsPage.writeComment(comment);
        await browser.refresh()
        await expect(await transactionsPage.getNewCommentItem()).toEqual(comment);
    })

    it('should like transaction', async()=>{
        await transactionsPage.clickOnTransaction();
        await transactionsPage.clickLikeBtn();
        await expect(await (await transactionsPage.getLikeCount()).getText()).toEqual('1');
    })

})