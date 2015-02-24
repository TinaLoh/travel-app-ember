import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: AddPost', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});


// test('visiting /posts/show', function(assert) {
//   visit('/posts/show');
//
//   andThen(function() {
//     assert.equal(currentPath(), 'posts.show');
//   });
// });

test('visiting /posts/new', function(assert) {
  visit('/posts/new');

  andThen(function() {
    assert.equal(currentPath(), 'posts.new');
  });
});
