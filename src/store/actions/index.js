import {
  HYDRATE_PREFERENCES,
  REORDER_TWEET_DECKS,
  CHANGE_PREFERENCE_DRAWER_STATUS,
} from './types';

export const changePreferenceDrawerStatus = status => {
  return {
    type: CHANGE_PREFERENCE_DRAWER_STATUS,
    payload: status,
  };
};
export const hydratePreferences = preferences => {
  return {
    type: HYDRATE_PREFERENCES,
    payload: preferences,
  };
};
export const reorderTweetDecks = handles => ({
  type: REORDER_TWEET_DECKS,
  payload: handles,
});
