import { Home } from '../pageobjects/home.page';
const homePage = new Home();
import { ProductsPage } from '../pageobjects/products.page';
const productsPage = new ProductsPage();


describe('Suite Case: Product Page', () => {

    beforeEach(async () => {
        homePage.open('/');
    });
    it('Test Case 02: Search Product', async () => {
        await homePage.products();
        await productsPage.searchProducts();
        await productsPage.titleSearchedProductisVisible();
        await productsPage.productsSearchedisVisible();
    }); 

});