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
        city: this.get('city')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
      this.set('author', '');
      this.set('question', '');
      this.set('notes', '');
      this.set('city', '');
    }
  }
});
