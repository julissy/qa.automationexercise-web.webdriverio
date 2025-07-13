import { faker } from '@faker-js/faker';

const countries = [
  'India',
  'United States',
  'Canada',
  'Australia',
  'Israel',
  'New Zealand',
  'Singapore'
];

export const userData = {
  fullName: faker.person.fullName(),
  email: faker.internet.email({provider: 'example.test' }),
  password: faker.internet.password({ length: 6, prefix: 'test' }),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  company: faker.company.name(),
  address: faker.location.streetAddress(),
  address2: faker.location.secondaryAddress(),
  country: faker.helpers.arrayElement(countries),
  state: faker.location.state(),
  city: faker.location.city(),
  zipCode: faker.location.zipCode(),
  phone: faker.phone.number({ style: 'national'}),

};