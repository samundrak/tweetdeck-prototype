import { FETCH_TWEETS } from './index';
import httpClient from '../utils/HttpClient';

const twitterApi = httpClient.twitter();
export function getTweets(query) {
  return twitterApi.get(FETCH_TWEETS, { params: query });
}
