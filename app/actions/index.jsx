import axios from 'axios';

const API_KEY = '2d6974785d53707b6d1577717a762c33';
const ROOT_URL = 'https://api.meetup.com/2/open_events?&sign=true&photo-host=public&category=34&page=60&key=' + API_KEY ;

export const FETCH_MEETUPS = 'FETCH_MEETUPS';

// action creator gets triggered when user submits form
// action makes an ajax request
export function fetchMeetups(postcode) {
  const url = ROOT_URL + '&zip=' + postcode;
  const request = axios.get(url);

  // action return a promise (promise doesn't contain any data)
  // the promise is returned as the payload
  return {
    type: FETCH_MEETUPS,
    payload: request
  };
}
