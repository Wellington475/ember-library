import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | students/create');


test('create new students', function(assert) {
  visit('/students/create');

  // Visitar a ROTA de criar estudantes.
  // preencher todos os campos
  // criar

  fillIn('.student-view-name', 'well');
  fillIn('.student-view-registration', 'test');
  fillIn('.student-view-phone', 'test1');
  fillIn('.student-view-email', 'test2');
  click('.student-view-btn-send');

  andThen(function() {
    assert.equal(currentURL(), '/students');
  });
});
