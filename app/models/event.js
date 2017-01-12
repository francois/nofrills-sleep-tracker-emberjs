import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  timezone : DS.attr('string'),
  type     : DS.attr('string'),
  startAt  : DS.attr('number'),
  endAt    : DS.attr('number'),

  durationInSeconds: Ember.computed('startAt', 'endAt', function() {
    return Math.round((this.get('endAt') - this.get('startAt')) / 1000);
  }),
});
