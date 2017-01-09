import Ember from 'ember';

export default Ember.Component.extend({
  averageNightDuration: Ember.computed('events.@each.durationInSeconds', function() {
    let nightEvents = this.get('events').
      filter(function(event) { return event.type === 'night'; });

    if (nightEvents.length === 0) {
      return 0;
    } else {
      let totalDuration = nightEvents.
        map(function(event) { return event.durationInSeconds; }).
        reduce(function(a, b) { return a + b; }, 0);

      return totalDuration / nightEvents.length;
    }
  }),

  actions: {
    didStartSleeping: function() {
      this.get('didStartSleeping')();
    },

    didStartNapping: function() {
      this.get('didStartNapping')();
    },
  },
});
