import Component from '@ember/component';
import { get, set } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),
  router: inject(),

  name: undefined,
  registration: undefined,
  phone: undefined,
  email: undefined,
  studentId: undefined,

  didReceiveAttrs(){
    this._super(...arguments);

    // set(this, 'name', get(this, 'student.name'));
    // set(this, 'registration', get(this, 'student.registration'));
    // set(this, 'phone', get(this, 'student.phone'));
    // set(this, 'email', get(this, 'student.email'));
    // set(this, 'studentId', get(this, 'student.id'));
    set(this, 'name', get(this, 'student.name'));
    set(this, 'registration', get(this, 'student.registration'));
    set(this, 'phone', get(this, 'student.phone'));
    set(this, 'email', get(this, 'student.email'));
    set(this, 'studentId', get(this, 'student.id'));
  },

  actions: {
    send(studentId) {
      let store = get(this, 'store');

      let name = get(this, 'name');
      let registration = get(this, 'registration');
      let phone = get(this, 'phone');
      let email = get(this, 'email');

      if(studentId){
        let student = get(this, 'store').peekRecord('student', studentId);
        student.set('name', name);
        student.set('registration', registration);
        student.set('phone', phone);
        student.set('email', email);
        student.save();
      }
      else{
        store.createRecord('student', {
          name,
          registration,
          phone,
          email
        }).save().then(() => {
          debugger
        }).catch((a, b) => {
          debugger
        });
       // this.get('router').transitionTo('students');
      }
    }
  }
});