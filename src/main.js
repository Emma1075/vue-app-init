// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import filterConfig from '@/utils/filter-config';
import axiosConfig from '@/utils/axios-config';

import Vue from 'vue';
import 'lib-flexible';
import App from './App';
import router from './router';
import store from './store/index';

Vue.use(require('vue-wechat-title'));

Vue.use(filterConfig);
Vue.use(axiosConfig);

// Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
