import Ember from 'ember';

export function formatDuration(params) {
  let duration = params[0];
  let hours   = Math.trunc(duration / (60 * 60));
  let minutes = Math.trunc((duration % 3600) / 60);
  let longMinutesAsString = `000${minutes}`;
  let minutesAsString = longMinutesAsString.substr(-2);
  if (hours === 0) {
    return `${minutesAsString}m`;
  } else {
    return `${hours}h${minutesAsString}m`;
  }
}

export default Ember.Helper.helper(formatDuration);
