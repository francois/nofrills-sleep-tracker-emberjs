import Ember from 'ember';
import moment from 'moment';

export function formatTimestamp(params) {
  let timezone  = params[0];
  let timestamp = params[1];
  if (!timestamp) { return ""; }

  let ts = moment(timestamp);
  return ts.tz(timezone).format("HH:mm");
}

export default Ember.Helper.helper(formatTimestamp);
