import { $ } from '@wdio/globals';
import { element } from '../elements/products.elements';
import { elements } from '../elements/cart.elements';

export class CartPage {

    async verifyProductAndQuantity() {
        const cartQuantity = $(elements.cartQuantity);

        await expect(cartQuantity).toHaveText('4');
    };

    async clickDelete(productIndex: number) {
        const btnDelete = $(`//a[@data-product-id='${productIndex}']`);;

        await expect(btnDelete).toBeDisplayed();
        await btnDelete.click();
    }
}