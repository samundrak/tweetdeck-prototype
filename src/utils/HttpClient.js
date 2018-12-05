import axios from 'axios';

const validateStatus = function validateStatus(status) {
  return status >= 200 && status <= 299; // default
};
const { protocol, hostname } = window.location;
const PORT = 7820;
const TWITTER_PROXY_SERVER = `${protocol}//${hostname}:7890/1.1/`;
console.log(TWITTER_PROXY_SERVER);

export default {
  app: function guest() {
    return axios.create({
      baseURL: `${protocol}//${hostname}:${PORT}`,
      validateStatus,
    });
  },
  twitter: function twitter() {
    return axios.create({
      baseURL: TWITTER_PROXY_SERVER,
      validateStatus,
    });
  },
};
