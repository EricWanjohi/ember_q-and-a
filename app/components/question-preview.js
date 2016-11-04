import Ember from 'ember';

export default Ember.Component.extend({
  questionTile: Ember.computed('question.question', 'question.author', function() {
    return this.get('question.author') + ' asks: ' + this.get('question.question');
  }),
});
