import { set } from 'dot-prop-immutable';
import { FETCH_TWEETS } from '../actions/types';

const intialState = {
  handles: ['ycombinator', 'MakeSchool', 'newsycombinator'], //'newsycombinator', 'ycombinator','MakeSchool
  tweets: {},
};

export default (state = intialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return set(state, `tweets.${action.screenName}`, action.payload);
    default:
      return state;
  }
};
