import { Home } from '../pageobjects/home.page';
const homePage = new Home();
import { ProductsPage } from '../pageobjects/products.page';
const productsPage = new ProductsPage();
import { CartPage } from '../pageobjects/cart.page';
const cartPage = new CartPage();


describe('Test Case 03: Verify Product quantity in Cart', () => {

    before(async () => {
        homePage.open('/');
        await homePage.products();
    });

    it(' Click "View Product" for any product on home page', async () => {
        await productsPage.clickViewProduct();
    });

    it('Increase quantity to 4', async () => {
        await productsPage.increaseQuantityTo4();
    });

    it('Click "Add to cart" button', async () => {
        await productsPage.clickAddCart();
    });

    it('Click "View Cart" button', async () => {
        await productsPage.clickViewCart();
    });

    it('Verify that the product is displayed on the cart page with the exact quantity', async () => {
        await cartPage.verifyProductAndQuantity();
    });

});