import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // TODO: replace hard-coded 'event' with this user's UUID, in order to implement multi-tenanting
    // Split user's data in two sections: `events:UUID` and `settings:UUID`. This way, we can easily store user's settings server-side.
    return this.store.findAll('event').then(function(events) {
      return events.sortBy("startAt").reverse();
    });
  }
});
