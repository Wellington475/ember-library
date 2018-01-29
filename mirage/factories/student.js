import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.name.findName() },
  registration() { return faker.finance.amount(9000,10000,4) },
  phone() { return faker.phone.phoneNumberFormat(1) },
  email() { return faker.internet.email() }
});