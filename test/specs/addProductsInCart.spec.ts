import { Home } from '../pageobjects/home.page';
const homePage = new Home();
import { ProductsPage } from '../pageobjects/products.page';
const productsPage = new ProductsPage();
import { CartPage } from '../pageobjects/cart.page';
const cartPage = new CartPage();

describe('Test Case 04: Add Products in Cart', () => {

    before(async () => {
        homePage.open('/');
        await homePage.products();
    });

    it('Hover over first product and click "Add to cart"', async () => {
        await productsPage.hoverOverProductAndClick(1);
    })

    it('Click "Continue Shopping" button', async () => {
        await productsPage.clickContinueShopping();
    });

    it('Hover over second product and click "Add to cart"', async () => {
        await productsPage.hoverOverProductAndClick(2);
    });

    it('Click "View Cart" button', async () => {
        await productsPage.clickViewCart();
    });

    it('Verify both products are added to Cart', async () => {
        
    });
});