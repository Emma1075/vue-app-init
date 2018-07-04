import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
    },
    component: () => import('@/pages/index/index'),
  }, {
    path: '/list',
    name: 'List',
    meta: {
      title: '列表页',
    },
    component: () => import('@/pages/list/index'),
  }, {
    path: '/detail/:id',
    name: 'Detail',
    meta: {
      title: '详情页',
    },
    component: () => import('@/pages/detail/index'),
  }],
});
