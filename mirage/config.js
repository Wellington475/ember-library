export default function() {
  this.urlPrefix = 'http://192.168.0.109:8081/api'
  this.timing = 300;

  this.get('/students', 'students');
  // this.get('/students', (db) => {
  //   return db.students.all();
  // });

  this.get('/students/:student_id', 'student');

  // this.post('/students', 'student');
  this.post('/students', (db, request) => {
    return db.students.create(JSON.parse(request.requestBody).student);
  });

  this.put('/students/:student_id', (db, request) => {
    return db.students.find(request.params.student_id).update(JSON.parse(request.requestBody).student);
  });

  this.del('/students/:id');
}