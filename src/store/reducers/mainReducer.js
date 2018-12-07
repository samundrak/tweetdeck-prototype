import { set } from 'dot-prop-immutable';
import {
  FETCH_TWEETS,
  CHANGE_PREFERENCE_DRAWER_STATUS,
  HYDRATE_PREFERENCES,
} from '../actions/types';

const intialState = {
  handles: [], //'newsycombinator', 'ycombinator','MakeSchool'
  tweets: {},
  isPreferencesDrawerOpen: false,
  preferences: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return set(state, `tweets.${action.screenName}`, action.payload);
    case CHANGE_PREFERENCE_DRAWER_STATUS:
      return set(state, 'isPreferencesDrawerOpen', action.payload);
    case HYDRATE_PREFERENCES:
      return set(state, 'preferences', action.payload);
    default:
      return state;
  }
};
