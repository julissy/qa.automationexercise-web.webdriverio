import { $ } from '@wdio/globals';
import { element } from '../elements/confirmation.elements';

export class ConfirmationPage {

    async clickButtonContinue() {
        const btnContinue = $(element.btnContinue);
        await expect(btnContinue).toBeDisplayed;
        await btnContinue.click();
        
    }

    async titleAccountDeleteisVisible() {
        await expect($(element.titleDeletedAccount)).toBeDisplayed();
        await expect($(element.titleDeletedAccount)).toHaveText('ACCOUNT DELETED!');
        
    }
}