import { faker } from '@faker-js/faker';

const products = [
    'jeans',
    'dress',
    'shirt',

]

export const productData = {
    productName: faker.helpers.arrayElement(products),
    
};