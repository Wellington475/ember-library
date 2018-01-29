import DS from 'ember-data';

const {
  RESTAdapter
} = DS;

export default RESTAdapter.extend({
  //host: 'https://mocksvc.mulesoft.com/mocks/2ff12fde-810f-4d29-9438-bde9e47f449a'
  host: 'http://192.168.0.109:8081',
  namespace: 'api'
});
