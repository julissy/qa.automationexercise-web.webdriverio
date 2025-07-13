import { $ } from '@wdio/globals'
import { element } from '../elements/login.elements';
import { userData } from '../../data/userRegister'; 

export class LoginPage {

    async enterNameAndEmail() {
        await $(element.inputName).setValue(userData.fullName);
        await $(element.inputEmail).setValue(userData.email);
    }

    async clickButtonSignup() {
        const btnSignup = $(element.btnSignup);
        await expect(btnSignup).toBeDisplayed();
        await btnSignup.click();

    }
}