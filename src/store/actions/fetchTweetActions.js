import { getTweets } from '../../api/calls';
import { FETCH_TWEETS } from './types';

export const fetchTweetsAction = ({
  count = 30,
  screenName: screen_name,
}) => dispatch => {
  return getTweets({ count, screen_name })
    .then(response => {
      dispatch({
        type: FETCH_TWEETS,
        payload: response.data,
        screenName: screen_name,
      });
    })
    .catch(err => {
      console.log(err);
    });
};
