import page from './page';
import { Key } from 'webdriverio';

const newBtn = '[data-test="nav-top-new-transaction"]';
const user = '[data-test="users-list"]>li';
const amountField = '#amount';
const addANoteField = '#transaction-create-description-input';
const payBtn = '[data-test="transaction-create-submit-payment"]';
const requestBtn = '[data-test="transaction-create-submit-request"]';
const successMsg = '.MuiTypography-root.MuiTypography-h6.MuiTypography-colorPrimary.MuiTypography-gutterBottom';
const homeBtn = '[data-test="sidenav-home"]';
const transactions = '//*[contains(@data-test, "transaction-item")]';
const commentField = '//*[contains(@id, "transaction-comment-input")]';
const commentItem = '//*[contains(@data-test, "comment-list-item")]';
const likeBtn = '//*[contains(@data-test, "transaction-like-button")]';
const likeCount = '//*[contains(@data-test, "transaction-like-count")]';
const amountFiltrBtn = '[data-test="transaction-list-filter-amount-range-button"';

class TransactionsPage{

    async getNewCommentItem(){
        const commentsItems = await page.getAllElements(commentItem);
        return await commentsItems[commentsItems.length -1].getText();
    }

    async getSuccessMsg(){
        return (await page.getElementByIndex(successMsg, 1)).getText();
    }

    async getLikeCount(){
        return await page.getElement(likeCount);
    }

    async getCommentItem(){
        return (await page.getElement(commentItem)).getText();
    }

    async clickNewBtn(){
        await page.clickElement(newBtn);
    }

    async clickOnUser(){
        await page.clickElement(user);
    }

    async setAmount(amount: string){
        await page.setValue(amountField, amount);
    }

    async setNote(note: string){
        await page.setValue(addANoteField, note);
    }

    async writeComment(comment: string){
        await page.setValue(commentField, comment);
        await browser.keys(Key.Enter);
    }

    async clickPayBtn(){
        await page.clickElement(payBtn);
    }

    async clickRequestBtn(){
        await page.clickElement(requestBtn);
    }

    async clickHomeBtn(){
        await page.clickElement(homeBtn);
    }

    async clickOnTransaction(){
        await page.clickElement(transactions);
    }

    async clickLikeBtn(){
        await page.clickElement(likeBtn);
    }

    async clickAmountFiltrBtn(){
        await page.clickElement(amountFiltrBtn);
    }

    async isSuccessMsgDisplayed(){
        return await page.isElementDisplayed(successMsg);
    }
}

export default new TransactionsPage();