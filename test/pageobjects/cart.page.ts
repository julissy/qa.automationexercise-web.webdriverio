import { $ } from '@wdio/globals';
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
        
    };

    async productIsRemoved(productIndex: number) {
        const productName = $(`a[href="/product_details/${productIndex}"]`);

        await expect(productName).not.toBeDisplayed();
    };
};