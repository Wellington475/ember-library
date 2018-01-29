import Component from '@ember/component';
import { get } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),

  tagName: 'li',
  classNames: ['list-group-item'],

  actions: {
    delete(student_id){   
      get(this, 'store').findRecord('student', student_id, { backgroundReload: false }).then(function(student) {
        student.destroyRecord()
      });
    }
  }
});
