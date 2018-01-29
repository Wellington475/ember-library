export default function() {
  this.urlPrefix = 'http://192.168.0.109:8081/api'
  this.timing = 300;

  this.get('/students', (db) => {
    return {
      students: db.students.all().models
    }
  });

  this.get('/students/:student_id', (db, request) => {
    return {
      student: db.students.find(request.params.student_id)
    }
  });

  this.post('/students', (db, request) => {
    let student = JSON.parse(request.requestBody).student;
    return db.students.create(student);
  });

  // this.put('/students/:student_id', () => {
  //   return true;
  // });

  // this.del('/students/:student_id', () => {
  //   return true;
  // });
  
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
