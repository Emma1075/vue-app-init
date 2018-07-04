import axios from 'axios';

function install() {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.interceptors.request.use(config => config, error => Promise.reject(error));
  axios.interceptors.response.use(config => config, error => Promise.reject(error));
}

export default install;
