import { Home } from '../pageObjects/home.page';
const homePage = new Home();
import { ProductsPage } from '../pageObjects/products.page';
const productsPage = new ProductsPage();


describe('Suite Case: Product Page', () => {

    before(async () => {
        homePage.open('/');
    });
    it('Test Case 02: Search Product', async () => {
        await homePage.products();
        await productsPage.searchProducts();
        await productsPage.titleSearchedProductisVisible();
        await productsPage.productsSearchedisVisible();
    }); 

});