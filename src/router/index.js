import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
  path: '/',
  name: 'Index',
  meta: {
    title: '首页',
  },
  component: () => import('@/pages/index/index'),
}, {
  path: '/pending-task/list',
  name: 'pendingList',
  meta: {
    title: '待量房列表',
    description: '这是待量房的列表',
    keepAlive: true,
  },
  component: () => import('@/pages/pending-task/list/index'),
}, {
  path: '/pending-task/detail/:id',
  props: true,
  name: 'PendingDetail',
  meta: {
    title: '待量房详情',
  },
  component: () => import('@/pages/pending-task/detail/index'),
}, {
  path: '/done-task/list',
  name: 'DoneList',
  meta: {
    title: '已量房列表',
    description: '这是已量房的列表',
    keepAlive: true,
  },
  component: () => import('@/pages/done-task/list/index'),
}, {
  path: '/done-task/detail/:id',
  props: true,
  name: 'DoneDetail',
  meta: {
    title: '已量房详情',
  },
  component: () => import('@/pages/done-task/detail/index'),
}, {
  path: '/mine',
  name: 'Mine',
  meta: {
    title: '我的',
  },
  component: () => import('@/pages/mine/index'),
}, {
  path: '/data',
  name: 'Data',
  meta: {
    title: '数据',
  },
  component: () => import('@/pages/data/index'),
}];

export default new Router({
  routes,
  mode: 'hash',
  // base: '/ke/',
  // linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   if (from.meta.keepAlive) {
  //     /* eslint-disable */
  //     from.meta.savedPosition = document.body.scrollTop;
  //   }
  //   return { x: 0, y: to.meta.savedPosition || 0 };
  // },
});
