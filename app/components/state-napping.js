import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    didCancel: function() {
      this.get('didCancel')();
    },

    didAwaken: function() {
      this.get('didAwaken')();
    },
  }
});
