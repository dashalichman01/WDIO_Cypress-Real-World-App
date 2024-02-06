import userPage from '../pageobjects/user.page';
import loginPage from '../pageobjects/login.page';
import generator from '../helper/generator';

describe('User settings tests', ()=>{
    before(async()=>{
        await loginPage.open();
        await loginPage.login(''+process.env.USER, ''+process.env.PASSWORD);
    })

    it('should change user firstname and lastname', async()=>{
        const firstname = await generator.randomFirstName();
        const lastname = await generator.randomLastName();
        await userPage.clickMyAccountBtn();
        await userPage.setFirstname(firstname);
        await userPage.setLastname(lastname);
        await userPage.clickSaveBtn();
        await expect(await userPage.getUsername()).toEqual(firstname + " "+ lastname[0])
    })

    it('should change user firstname', async()=>{
        const firstname = await generator.randomFirstName();
        await userPage.clickMyAccountBtn();
        await userPage.setFirstname(firstname);
        await userPage.clickSaveBtn();
        await expect((await userPage.getUsername()).split(" ")[0]).toEqual(firstname);
    })

    it('should change user lastname', async()=>{
        const lastname = await generator.randomLastName();
        await userPage.clickMyAccountBtn();
        await userPage.setLastname(lastname);
        await userPage.clickSaveBtn();
        await expect((await userPage.getUsername()).split(" ")[1]).toEqual(lastname[0]);
    })
})