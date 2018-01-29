import Route from '@ember/routing/route';
import {get} from '@ember/object';

export default Route.extend({
  model(param) {
    if (param.student_id) {
      return get(this, 'store').peekRecord('student', param.student_id);
    }
  }
});