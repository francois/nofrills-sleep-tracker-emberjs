import Ember from 'ember';

let events = [
  {
    "dow": 5,
    "durationInSeconds": 29280,
    "endAt": 1471087260000,
    "startAt": 1471057980000,
    "timezone": "America/Montreal"
  },
  {
    "dow": 0,
    "durationInSeconds": 28980,
    "endAt": 1471260060000,
    "startAt": 1471231080000,
    "timezone": "America/New_York"
  },
  {
    "dow": 1,
    "durationInSeconds": 28680,
    "endAt": 1471346460000,
    "startAt": 1471317780000,
    "timezone": "America/Montreal"
  },
  {
    "dow": 3,
    "durationInSeconds": 23640,
    "endAt": 1471432860000,
    "startAt": 1471409220000,
    "timezone": "America/Montreal"
  },
  {
    "dow": 2,
    "durationInSeconds": 2520,
    "endAt": 1471373400000,
    "startAt": 1471370880000,
    "timezone": "America/Montreal"
  }
];

export default Ember.Route.extend({
  model() {
    return events.sortBy("startAt").reverse();
  }
});
