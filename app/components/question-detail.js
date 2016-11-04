import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkQuestion: Ember.inject.service(),

  actions: {
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    },
    addToBookmarks(question) {
      this.get('bookmarkQuestion').add(question);
    }
  }
});
