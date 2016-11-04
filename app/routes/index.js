import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion(params) {
      if (params.author == null || params.notes == null || params.question == null || params.city == null) {
        alert("Please fill out all fields to submit a question.");
      } else {
        var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
        alert("Thank you for submitting your question. The vampire community may or may not get back to you. It's not up to you.");
        this.transitionTo('index');
      }
    },
  }
});
