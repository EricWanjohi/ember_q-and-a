import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    cancel() {
      this.set('updateQuestionForm', false);
    },
    update(post) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
        location: this.get('location'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
