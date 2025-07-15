import { Home } from '../pageobjects/home.page';
const homePage = new Home();
import { ProductsPage } from '../pageobjects/products.page';
const productsPage = new ProductsPage();
import { CartPage } from '../pageobjects/cart.page';
const cartPage = new CartPage();


describe('Suite Case: Cart Page', () => {

    beforeEach(async () => {
        homePage.open('/');
        await homePage.products();
    });

    it('Test Case 03: Verify Product quantity in Cart', async () => {
        await productsPage.clickViewProduct();
        await productsPage.increaseQuantity(4);
        await productsPage.clickAddCart();
        await productsPage.clickViewCart();
        await cartPage.verifyProductAndQuantity();
    });

    it('Test Case 04: Add Products in Cart', async () => {
        await productsPage.hoverOverProductAndClick(1);
        await productsPage.clickContinueShopping();
        await productsPage.hoverOverProductAndClick(2);
        await productsPage.clickViewCart();

    });

    it('Test Case 05: Remove Products From Cart', async () => {
        await productsPage.hoverOverProductAndClick(1);
        await productsPage.clickContinueShopping();
        await productsPage.hoverOverProductAndClick(2);
        await productsPage.clickContinueShopping();
        await homePage.cart();
        await cartPage.clickDelete(1);
        await cartPage.productIsRemoved(1);

    });

    afterEach(async () => {
        await browser.reloadSession();
    })

});