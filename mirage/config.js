export default function() {
  this.urlPrefix = 'http://192.168.0.109:8081/api'
  this.timing = 300;
  // this.get('/students', () => {
  //   return {
  //     'students': [
  //       {
  //         phone: "(13) 3252-4844",
  //         registration: "727456-623",
  //         email: "obiwan@gmail.com",
  //         name: "Obi Wan Kenobi",
  //         id: 1
  //       },
  //       {
  //         phone: "(41) 73296-4282",
  //         registration: "424126-123",
  //         email: "maul@sciensa",
  //         name: "Darth Maul",
  //         id: 2
  //       }
  //     ]
  //   };
  // });
  this.get('/students', 'students')
  this.get('/students/:student_Id', 'student')
  this.post('/students', (db, request) => {
    return db.students.create(JSON.parse(request.requestBody).student);
  });
 
  this.put('/students/:student_id', (db, request) => {
    return db.students.find(request.params.student_id).update(
      JSON.parse(request.requestBody).student);
  });
  this.del('/students/:student_id', function(db, request) {
    db.students.find(request.params.student_id).destroy();
  });
  this.get('/books', 'books')
}
