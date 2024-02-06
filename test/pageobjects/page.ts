class Page {

    async open (path: string) {
        await browser.url(path)
    }
    async getElement(element: string) {
        return await $(element);
    }

    async getAllElements(element: string){
        return await $$(element)
    }

    async getElementLocation(element: string){
        return await (await this.getElement(element)).getLocation()
    }

    async clickElement(element: string, flag = true) {
        if (flag) {
            await this.scrollTo(element);
            await this.waitUntilElementDisplated(element);
        }
        await (await this.getElement(element)).click();
    }

    async getElementByIndex(element: string, index: number) {
        return (await $$(element))[index];
    }

    async clickElementByIndex(element: string, index: number){
        await ((await this.getAllElements(element))[index]).click();
    }

    async isElementClickable(element: string) {
        return await (await this.getElement(element)).isClickable();
    }

    async getAmount(element: string){
        return (await $$(element)).length;
    }

    async isElementClickableByIndex(element: string, index: number) {
        return await (await this.getElementByIndex(element, index)).isClickable();
    }

    async isElementDisplayed(element: string, flag = true) {
        if (flag) {
            await this.waitUntilElementDisplated(element);
        }
        return await (await this.getElement(element)).isDisplayed();
    }

    async waitUntilElementDisplated(element: string) {
        await browser.waitUntil(
            async () => await (await this.getElement(element)).isDisplayed(),
            {
                timeout: 30000,
                timeoutMsg: 'expected element should be displayed after 30s'
            }
        )
    }

    async setValue(element: string, value: string, flag = true) {
        if (flag) {
            await this.waitUntilElementDisplated(element);
        }
        await (await this.getElement(element)).setValue(value);
    }

    async scrollTo(element: string) {
        await (await this.getElement(element)).scrollIntoView();
    }

    async isElementEnabled(element: string) {
        return await (await this.getElement(element)).isEnabled();
    }

}
export default new Page();