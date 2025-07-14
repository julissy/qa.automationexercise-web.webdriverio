import { Home } from '../pageobjects/home.page';
const homePage = new Home();
import { ProductsPage } from '../pageobjects/products.page';
const productsPage = new ProductsPage();
import { CartPage } from '../pageobjects/cart.page';
const cartPage = new CartPage();

async function setupInicial() {
    homePage.open('/');
    await homePage.products();
};

describe('Test Case 03: Verify Product quantity in Cart', () => {

    before(async () => {
        await setupInicial();
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

describe('Test Case 04: Add Products in Cart', () => {

    before(async () => {
        await setupInicial();
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
        
    })
})