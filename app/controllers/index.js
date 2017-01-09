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

    didAwaken: function(type) {
      let newEvents = this.get('model').slice();
      let timezone = this.get('timezone') || 'America/Montreal';
      let startAt = this.get('startAt').getTime();
      let endAt = new Date().getTime();

      let newEvent = {
        durationInSeconds: Math.round((endAt - startAt) / 1000),
        startAt: startAt,
        endAt: endAt,
        timezone: timezone,
        type: type,
      };

      console.log('events before %o', newEvents.length);
      console.log('newEvent: %o', newEvent);
      newEvents.push(newEvent);
      console.log('events after: %o', newEvents.length);

      this.set('model', newEvents);
      this.set('state', 'awake');
      this.set('startAt', undefined);
    },

    didReset: function() {
      this.set('state', 'awake');
      this.set('startAt', undefined);
    },
  }
});
