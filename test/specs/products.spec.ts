import { Home } from '../pageobjects/home.page';
const homePage = new Home();
import { ProductsPage } from '../pageobjects/products.page';
const productsPage = new ProductsPage();


describe('Test Case 2: Search Product', () => {

    before(async () => {
        homePage.open('/');
    })
    it('Click on "Products" button', async () => {
        await homePage.products();
    }); 

    it('Enter the product name in the search field and click the search button', async () => {
        await productsPage.searchProducts();
    })

    it('Check if "SEARCHED PRODUCTS" is visible', async () => {
        await productsPage.titleSearchedProductisVisible();
    })

    it('Check that all products related to the search are visible', async () => {
        await productsPage.productsSearchedisVisible();
    })
})