import { Factory, faker } from 'ember-cli-mirage';
export default Factory.extend({
  title() { return faker.lorem.text() },
  publisher() { return faker.finance.amount(9000,10000,4) },
  isnb() { return faker.finance.amount(9000,10000,4) },
  author() { return faker.phone.phoneNumberFormat(1) },
  category() { return faker.internet.email() }
});