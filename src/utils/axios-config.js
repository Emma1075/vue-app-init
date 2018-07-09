import axios from 'axios';
import qs from 'qs';

// 设置请求拦截器
function install() {
  // 如果有前缀
  // axios.defaults.baseURL = '/api';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  axios.interceptors.request.use(config => config, error => Promise.reject(error));
  // 封装, post 请求使用 qs 将 data 转化格式
  axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
      /* eslint-disable */
      config.data = qs.stringify(config.data);
    }
    return config;
  }, error => Promise.reject(error));
  axios.interceptors.response.use(config => config, error => Promise.reject(error));
}

export default install;
