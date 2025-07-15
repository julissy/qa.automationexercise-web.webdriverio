import { Home } from '../pageobjects/home.page';
const homePage = new Home();
import { LoginPage } from '../pageobjects/login.page';
const loginPage = new LoginPage();
import { RegisterPage } from '../pageobjects/register.page';
const registerPage = new RegisterPage();
import { ConfirmationPage } from '../pageobjects/confirmation.page';
const confirmationPage = new ConfirmationPage();

describe('Suite Case: Register Page', () => {

    before(async () => {
        homePage.open('/');
    })
    it('Test Case 01: Register User', async () => {
        await homePage.signUp();
        await loginPage.enterNameAndEmail();
        await loginPage.clickButtonSignup();
        await registerPage.formAccountDetails();
        await registerPage.clickCheckboxNewsletter();
        await registerPage.clickCheckboxSpecialOffers();
        await registerPage.formAddressDetails();
        await registerPage.clickButtonCreateAccount();
        await confirmationPage.clickButtonContinue();
        await homePage.deleteAccount();
        await confirmationPage.titleAccountDeleteisVisible();
        await confirmationPage.clickButtonContinue();
    }); 
    
});

