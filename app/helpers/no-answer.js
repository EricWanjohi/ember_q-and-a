import Ember from 'ember';

export function noAnswer(params) {
  var question = params[0];

  if (question.get('answers').get('length') < 1) {
    return Ember.String.htmlSafe('The Vampire Community ignores you, puny human.');
  }

}

export default Ember.Helper.helper(noAnswer);
