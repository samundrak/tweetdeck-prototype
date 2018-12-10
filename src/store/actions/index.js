import { HYDRATE_PREFERENCES, REORDER_TWEET_DECKS, CHANGE_PREFERENCE_DRAWER_STATUS } from './types';

export const changePreferenceDrawerStatus = status => ({
  type: CHANGE_PREFERENCE_DRAWER_STATUS,
  payload: status,
});
export const hydratePreferences = preferences => ({
  type: HYDRATE_PREFERENCES,
  payload: preferences,
});
export const reorderTweetDecks = handles => ({
  type: REORDER_TWEET_DECKS,
  payload: handles,
});
