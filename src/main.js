// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import filterConfig from '@/utils/filter-config';
import axiosConfig from '@/utils/axios-config';

import Vue from 'vue';
import Vuex from 'vuex';
import 'lib-flexible';
import FastClick from 'fastclick';
import App from './App';
import router from './router';
import store from './store/index';
import './assets/styles/global.less';

Vue.use(Vuex);
Vue.use(require('vue-wechat-title'));

Vue.use(filterConfig);
Vue.use(axiosConfig);

FastClick.attach(document.body); // 使用fastclick, 解决移动端项目点击事件有300秒延迟问题
// Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
