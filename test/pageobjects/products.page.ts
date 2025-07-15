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
        
    };

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

    async clickViewProduct() {
        const btnViewProduct = $(element.btnViewProduct);
        await expect(btnViewProduct).toBeDisplayed();
        await btnViewProduct.click();
        
    }

    async increaseQuantity(quantityValue : number) {
       const inputQuantity = $(element.inputQuantity);
       await inputQuantity.clearValue();
       await inputQuantity.setValue(quantityValue);
       await expect(inputQuantity).toHaveValue(quantityValue.toString());
       
    };

    async clickAddCart() {
        const btnAddCart = $(element.btnAddCart);
        await expect(btnAddCart).toBeDisplayed();
        await btnAddCart.click();

    };

    async clickViewCart() {
        const btnViewCart = $(element.btnViewCart);
        await expect(btnViewCart).toBeDisplayed();
        await btnViewCart.click();
        
    };

    async hoverOverProductAndClick(productIndex: number) {
        const products = await $$(element.listProductsIndex);
        const product = products[productIndex - 1];
        const btnAddCart = product.$(`//div[contains(@class,"overlay-content")]/a[@data-product-id='${productIndex}']`);
        
        await product.scrollIntoView();
        await product.moveTo();

        await expect(btnAddCart).toBeDisplayed();
        await btnAddCart.click();
           
    };

    async clickContinueShopping() {
        const btnContinueShopping = $(element.btnContinueShopping);
        await expect(btnContinueShopping).toBeDisplayed();
        await btnContinueShopping.click();
        
    };  
};