import page from './page';

const notificationsBtn = '[data-test="sidenav-notifications"]';
const dismissBtn = '//*[contains(@data-test, "notification-mark-read")]';
const notifications = '[data-test="notifications-list"]>li>button'

class NotificationsPage{
    
    async getAmountOfNotifications(){
        return await page.getAmount(notifications);
    }

    async clickNotificationBtn(){
        await page.clickElement(notificationsBtn);
    }

    async clickDismissBtn(){
        await page.clickElementByIndex(dismissBtn, 0);
    }
}
export default new NotificationsPage();