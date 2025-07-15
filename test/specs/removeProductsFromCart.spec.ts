import { Home } from '../pageobjects/home.page';
const homePage = new Home();
import { ProductsPage } from '../pageobjects/products.page';
const productsPage = new ProductsPage();
import { CartPage } from '../pageobjects/cart.page';
const cartPage = new CartPage();


describe('Test Case 05: Remove Products From Cart', () => {

    before(async () => {
        homePage.open('/');
        await homePage.products();
    });

    it('Add products to cart', async () => {
        await productsPage.hoverOverProductAndClick(1);
        await productsPage.clickContinueShopping();
        await productsPage.hoverOverProductAndClick(2);
        await productsPage.clickContinueShopping();
    });

    it('Click "Cart" button', async () => {
        await homePage.cart();
    });

    it(' Click "X" button corresponding to particular product', async () => {
        await cartPage.clickDelete(1);
    });

    it('Verify that product is removed from the cart', async () => {
        await cartPage.productIsRemoved(1);
    });

});



