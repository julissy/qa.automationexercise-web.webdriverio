import { $ } from '@wdio/globals'
import { element } from '../elements/register.elements';
import { userData } from '../../data/userRegister'; 

export class RegisterPage {

    async formAccountDetails() {

        const title = $(element.title);
        const nameEquals = $(element.name);
        const emailEquals = $(element.email);
        const selectDay = $(element.dayBirth);
        const selectMonth = $(element.monthBirth);
        const selectYear = $(element.yearBirth);

        await title.click();
        await expect(nameEquals).toHaveValue(userData.fullName);
        await expect(emailEquals).toHaveValue(userData.email);
        await $(element.password).setValue(userData.password);
        await selectDay.selectByAttribute("value", "13");
        await selectMonth.selectByAttribute("value", "10");
        await selectYear.selectByAttribute("value", "1992");

    };

    async clickCheckboxNewsletter() {

        const checkboxNewsletter = $(element.checkboxNewsletter);
        await checkboxNewsletter.click();

    };

    async clickCheckboxSpecialOffers() {

        const checkboxSpecialOffers = $(element.checkboxSpecialOffers);
        await checkboxSpecialOffers.click();
        
    };

    async formAddressDetails() {
        await $(element.firstName).setValue(userData.firstName);
        await $(element.lastName).setValue(userData.lastName);
        await $(element.company).setValue(userData.company);
        await $(element.address).setValue(userData.address);
        await $(element.address2).setValue(userData.address2);
        await $(element.country).selectByAttribute("value", userData.country);
        await $(element.state).setValue(userData.state);
        await $(element.city).setValue(userData.city);
        await $(element.zipcode).setValue(userData.zipCode);
        await $(element.phone).setValue(userData.phone);

    }

    async clickButtonCreateAccount () {
        const btnCreateAccount = $(element.btnCreateAccount);
        await expect(btnCreateAccount).toBeDisplayed()
        await btnCreateAccount.click();
        
    }
}
