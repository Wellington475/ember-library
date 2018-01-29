import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('library');
  this.route('books');
  this.route('students', function() {
    this.route('view', {path: '/:student_id'});
    this.route('create');
  });
});

export default Router;
