import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
      if (params.author == null || params.notes == null || params.question == null || params.city == null) {
        alert("Please fill out all fields to submit update this question.")
      } else {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            question.set(key, params[key]);
          }
        });
        question.save();
        this.transitionTo('question', question);
      }
    },
    destroyQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveAnswer(params) {
      if (params.author == null || params.answer == null) {
        alert("Please fill out your vampire name and an answer to the question to submit... or dominate. Your choice. Just fill out the fields.")
      } else {
        var newAnswer = this.store.createRecord('answer', params);
        var question = params.question;
        question.get('answers').addObject(newAnswer);
        newAnswer.save().then(function() {
          return question.save();
        });
        this.transitionTo('question', question);
      }
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question', question);
    },
  }
});
