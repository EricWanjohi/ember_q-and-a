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
    update(questionObject) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
        city: this.get('city'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', questionObject, params);
    }
  }
});
