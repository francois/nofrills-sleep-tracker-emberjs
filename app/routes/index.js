import Ember from 'ember';

let events = [
  {
    "durationInSeconds": 29280,
    "endAt": 1471087260000,
    "startAt": 1471057980000,
    "timezone": "America/Montreal",
    "type": "night"
  },
  {
    "durationInSeconds": 28980,
    "endAt": 1471260060000,
    "startAt": 1471231080000,
    "timezone": "America/New_York",
    "type": "night"
  },
  {
    "durationInSeconds": 28680,
    "endAt": 1471346460000,
    "startAt": 1471317780000,
    "timezone": "America/Montreal",
    "type": "night"
  },
  {
    "durationInSeconds": 34440,
    "endAt": 1471443660000,
    "startAt": 1471409220000,
    "timezone": "America/Montreal",
    "type": "night"
  },
  {
    "durationInSeconds": 2520,
    "endAt": 1471373400000,
    "startAt": 1471370880000,
    "timezone": "America/Montreal",
    "type": "nap"
  }
];

export default Ember.Route.extend({
  model() {
    return events.sortBy("startAt").reverse();
  }
});
