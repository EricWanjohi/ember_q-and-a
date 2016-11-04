import Ember from 'ember';

export default Ember.Service.extend({
  bookmarks: [],

  add(question) {
    this.get('bookmarks').pushObject(question);
    alert("Now this question can also be found in your bookmarks.")
  },
});
