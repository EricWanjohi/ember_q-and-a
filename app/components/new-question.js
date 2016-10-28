import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    cancel() {
      this.set('addNewQuestion', false);
    },
    saveQuestion() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
        location: this.get('location')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
