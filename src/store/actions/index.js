import { HYDRATE_PREFERENCES, CHANGE_PREFERENCE_DRAWER_STATUS } from './types';

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
