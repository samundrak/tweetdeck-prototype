import axios from 'axios';

const validateStatus = function validateStatus(status) {
  return status >= 200 && status <= 299; // default
};
const { protocol, host } = window.location;
const PORT = 7820;
export default {
  guest: function guest() {
    return axios.create({
      baseURL: `${protocol}//${host}:${PORT}`,
      validateStatus,
    });
  },
};
