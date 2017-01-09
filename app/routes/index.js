import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // TODO: replace hard-coded 'event' with this user's UUID, in order to implement multi-tenanting
    return this.store.findAll('event').then(function(events) {
      return events.sortBy("startAt").reverse();
    });
  }
});
