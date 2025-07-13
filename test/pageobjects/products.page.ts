import { $ } from '@wdio/globals';
import { element } from '../elements/products.elements';
import { productData} from '../../data/productItem';


export class ProductsPage {

    async searchProducts() {
        const fieldSearch = $(element.fieldSearch);
        const btnSearch = $(element.btnSearch);
        await expect(fieldSearch).toBeDisplayed();
        await fieldSearch.setValue(productData.productName);
        await expect(btnSearch).toBeDisplayed();
        await btnSearch.click();
        
    }

    async titleSearchedProductisVisible() {
        await expect($(element.titleProducts)).toHaveText('SEARCHED PRODUCTS');
        
    };

    async productsSearchedisVisible() {
        const listProducts = await $$(element.listProducts);
        if (await listProducts.length === 0) {
            throw new Error('No products found');
        }

        for (const nameProduct of listProducts) {
            const titleProduct = ((await nameProduct.getText()).toLowerCase());
            expect(titleProduct).toContain(productData.productName);       
        };
    };
};