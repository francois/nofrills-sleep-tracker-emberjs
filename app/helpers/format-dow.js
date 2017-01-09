import Ember from 'ember';
import moment from 'moment';

export function formatDow(params) {
  let timezone  = params[0] || 'America/Montreal';
  let timestamp = params[1];

  let ts = moment(timestamp);
  return ts.tz(timezone).format("ddd");
}

export default Ember.Helper.helper(formatDow);
