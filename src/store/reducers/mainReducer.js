import { set } from 'dot-prop-immutable';
import { FETCH_TWEETS, REORDER_TWEET_DECKS, CHANGE_PREFERENCE_DRAWER_STATUS, HYDRATE_PREFERENCES } from '../actions/types';

const intialState = {
  tweets: {},
  tweetDeckKeys: Date.now(),
  isPreferencesDrawerOpen: false,
  preferences: null,
};

export default (state = intialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_TWEETS:
      return set(state, `tweets.${action.screenName}`, action.payload);
    case CHANGE_PREFERENCE_DRAWER_STATUS:
      return set(state, 'isPreferencesDrawerOpen', action.payload);
    case HYDRATE_PREFERENCES:
      newState = set(state, 'tweetDeckKeys', Date.now());
      return set(newState, 'preferences', action.payload);
    case REORDER_TWEET_DECKS:
      return set(state, 'preferences.handles', action.payload);
    default:
      return state;
  }
};
