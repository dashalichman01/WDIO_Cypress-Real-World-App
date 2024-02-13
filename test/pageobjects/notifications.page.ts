import page from './page';

const notificationsBtn = '[data-test="sidenav-notifications"]';
const dismissBtn = '//*[contains(@data-test, "notification-mark-read")]';
const notificationsCount = 'span.MuiBadge-badge';
const notifications = '[data-test="notifications-list"]>li>button'

class NotificationsPage{
    
    async getNotifications(){
        return await page.getAllElements(notifications);
    }

    async getNotificationsCount(){
        return await page.getElement(notificationsCount);
    }

    async getAmountOfNotifications(){
        return await page.getAmount(notifications);
    }

    async clickNotificationBtn(){
        await page.clickElement(notificationsBtn);
    }

    async clickDismissBtn(){
        await page.clickElement(dismissBtn, false);
    }
}
export default new NotificationsPage();