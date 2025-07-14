//import { expect } from '@wdio/globals';
import { Home } from '../pageobjects/home.page';
const homePage = new Home();
import { LoginPage } from '../pageobjects/login.page';
const loginPage = new LoginPage();
import { RegisterPage } from '../pageobjects/register.page';
const registerPage = new RegisterPage();
import { ConfirmationPage } from '../pageobjects/confirmation.page';
const confirmationPage = new ConfirmationPage()

describe('Test Case 01: Register User', () => {

    before(async () => {
        homePage.open('/');
    })
    it('Click on the "Signup / Login" button', async () => {
        await homePage.signUp();
    }); 
    
    it('Enter name and email address', async () => {
        await loginPage.enterNameAndEmail();
    });

    it('Click Signup button', async () => {
        await loginPage.clickButtonSignup();
    });

    it('Fill in the details: Title, Name, Email, Password, Date of birth', async () => {
        await registerPage.formAccountDetails();
    });

    it('Select the "Sign up for our newsletter!" checkbox', async () => {
        await registerPage.clickCheckboxNewsletter();
    });

    it('Select the "Receive special offers from our partners!" checkbox', async () => {
        await registerPage.clickCheckboxSpecialOffers();
    });

    it('Fill in the details: First Name, Last Name, Company, Address, Address 2, Country, State, City, Zip Code, Mobile Number', async () => {
        await registerPage.formAddressDetails();
    })

    it('Click the "Create Account" button', async () => {
        await registerPage.clickButtonCreateAccount();
    });

    it('Click "Continue" button', async () => {
        await confirmationPage.clickButtonContinue();
    });

    it('Click "Delete Account" button', async () => {
        await homePage.deleteAccount();
    });

    it('Verify that "ACCOUNT DELETED!" is visible and click "Continue" button', async () => {
        await confirmationPage.titleAccountDeleteisVisible();
        await confirmationPage.clickButtonContinue();
    })
});

