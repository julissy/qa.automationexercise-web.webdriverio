import { $ } from '@wdio/globals';
import { element } from '../elements/products.elements';


export class ProductsPage {

    async searchProducts() {
        const fieldSearch = $(element.fieldSearch);
        const btnSearch = $(element.btnSearch);
        await expect(fieldSearch).toBeDisplayed();
        await fieldSearch.setValue('dress');
        await expect(btnSearch).toBeDisplayed();
        await btnSearch.click();
        
    }

    async titleSearchedProductisVisible() {
        await expect($(element.titleProducts)).toHaveText('SEARCHED PRODUCTS');
        
    };

};