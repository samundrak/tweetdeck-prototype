import format from 'date-fns/format';
import { getTweets } from '../../api/calls';
import { FETCH_TWEETS } from './types';

export const fetchTweetsAction = ({ screenName: screen_name }) => (dispatch, getState) => {
  const {
    app: { preferences },
  } = getState();
  const since = preferences.time.from && format(new Date(preferences.time.from), 'YYYY/DD/MM');
  const untill = preferences.time.to && format(new Date(preferences.time.to), 'YYYY/DD/MM');
  return getTweets({
    count: preferences.tweetsPerColumn,
    screen_name,
    since,
    untill,
  })
    .then((response) => {
      dispatch({
        type: FETCH_TWEETS,
        payload: response.data,
        screenName: screen_name,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
