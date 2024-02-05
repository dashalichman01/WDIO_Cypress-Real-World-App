import page from './page';

const firstNameField = '#firstName';
const lastNameField = '#lastName';
const usernameField = '#username';
const passwordField = '#password';
const confirmPasswordField = '#confirmPassword';
const signUpBtn = 'button[type="submit"]';
const confirmPasswordErrorText = '#confirmPassword-helper-text';

class RegistrationPage{

    async open () {
        await page.open('signup');
    }

    async setFirstName(firstName:string){
        await page.setValue(firstNameField, firstName);
    }

    async setLastName(lastName:string){
        await page.setValue(lastNameField, lastName);
    }

    async setUsername(username:string){
        await page.setValue(usernameField, username);
    }

    async setPassword(password:string){
        await page.setValue(passwordField, password);
    }

    async setConfirmedPassword(password:string){
        await page.setValue(confirmPasswordField, password);
    }

    async clickSignUpBtn(){
        await page.clickElement(signUpBtn);
    }

    async getConfirmPasswordErrorText(){
        return await page.getElement(confirmPasswordErrorText);
    }

    async isSignUpClickable(){
        return await page.isElementClickable(signUpBtn);
    }

    async isConfirmPasswordErrorTextDisplayed(){
        return await page.isElementDisplayed(confirmPasswordErrorText);
    }
}

export default new RegistrationPage();