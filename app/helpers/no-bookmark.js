import Ember from 'ember';

export function noBookmark(bookmark) {
  console.log(bookmark);
  if (undefined != bookmark) {
    return Ember.String.htmlSafe('You can bookmark questions by clicking the "Bookmark Question" button on a question page.');
  }
}

export default Ember.Helper.helper(noBookmark);
