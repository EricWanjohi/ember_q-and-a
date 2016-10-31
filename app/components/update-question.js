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
    update(question) {
      console.log("HERE: " + this.get('author'));
      var params = {
        author: this.get('author'),
        question: this.get('question2'),
        notes: this.get('notes'),
        city: this.get('city'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
