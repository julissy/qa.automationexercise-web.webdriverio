import { browser } from '@wdio/globals'
import { element } from '../elements/home.elements'

export class Home {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path: string) {
        return browser.url(`https://automationexercise.com${path}`);
    }

    async signUp() {
        const btnSignUp = await $(element.btnSignup);
        await expect(btnSignUp).toBeDisplayed();
        await btnSignUp.click();
    }
    
    async deleteAccount() {
        const btnDelete = $(element.btnDelete);
        await expect(btnDelete).toBeDisplayed();
        await btnDelete.click();
        
    }
}
