import Ember from 'ember';

export default Ember.Controller.extend({
  isNapping: Ember.computed('state', function() {
    return this.get('state') === 'napping';
  }),

  isSleeping: Ember.computed('state', function() {
    return this.get('state') === 'sleeping';
  }),

  actions: {
    didStartNapping: function() {
      this.set('state', 'napping');
      this.set('startAt', new Date());
    },

    didStartSleeping: function() {
      this.set('state', 'sleeping');
      this.set('startAt', new Date());
    },

    didAwaken: function() {
      this.set('state', 'awake');
    },

    didCancel: function() {
      this.set('state', 'awake');
      this.set('startAt', undefined);
    },

    didReset: function() {
      this.set('state', 'awake');
      this.set('startAt', undefined);
      console.log("reset");
    },
  }
});
