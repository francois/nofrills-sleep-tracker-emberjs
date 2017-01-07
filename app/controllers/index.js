import Ember from 'ember';

export default Ember.Controller.extend({
  averageNapDuration: Ember.computed('model.@each.durationInSeconds', function() {
    let napEvents = this.get('model').
      filter(function(event) { return event.type === 'nap'; });

    let totalDuration = napEvents.
      map(function(event) { return event.durationInSeconds; }).
      reduce(function(a, b) { return a + b; }, 0);

    return totalDuration / napEvents.length;
  }),

  averageNightDuration: Ember.computed('model.@each.durationInSeconds', function() {
    let nightEvents = this.get('model').
      filter(function(event) { return event.type === 'night'; });

    let totalDuration = nightEvents.
      map(function(event) { return event.durationInSeconds; }).
      reduce(function(a, b) { return a + b; }, 0);

    return totalDuration / nightEvents.length;
  }),
});
