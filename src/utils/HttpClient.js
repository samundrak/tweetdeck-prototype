import axios from 'axios';

const validateStatus = function validateStatus(status) {
  return status >= 200 && status <= 299; // default
};
export default {
  guest: function guest() {
    return axios.create({
      baseURL: `/`,
      validateStatus,
    });
  },
};
