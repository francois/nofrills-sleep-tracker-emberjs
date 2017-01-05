import Ember from 'ember';
import moment from 'moment';

export function formatDow(params) {
  let timezone  = params[0];
  let timestamp = params[1];

  let ts = moment(timestamp);
  return ts.tz(timezone).format("dd");
}

export default Ember.Helper.helper(formatDow);
