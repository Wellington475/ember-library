import Route from '@ember/routing/route';
import { get } from '@ember/object';
export default Route.extend({
  model() {
    return Promise.all([
      get(this, 'store').findAll('student').then((students) => students),
      get(this, 'store').findAll('book').then((books) => books)
    ]).then(([arrStudents, arrBooks]) => {
      return { students: arrStudents, books: arrBooks };
    });
  }
});