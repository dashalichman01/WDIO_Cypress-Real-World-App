import notificationsPage from '../pageobjects/notifications.page';
import loginPage from '../pageobjects/login.page';

describe('Notifications test', ()=>{
    it('should dismiss notification', async()=>{
        await loginPage.open();
        await loginPage.login(''+process.env.USER, ''+process.env.PASSWORD);
        await notificationsPage.clickNotificationBtn();
        const notificationsBeforeDismissing = await notificationsPage.getAmountOfNotifications();
        await notificationsPage.clickDismissBtn();
        await browser.refresh();
        const notificationsAfterDismissing = await notificationsPage.getAmountOfNotifications();
        await expect(notificationsAfterDismissing).toEqual(notificationsBeforeDismissing - 1);
        await expect(await (await notificationsPage.getNotificationsCount()).getText()).toEqual(notificationsAfterDismissing.toString());
    })
})