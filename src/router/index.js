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
  path: '/list',
  name: 'List',
  meta: {
    title: '列表页',
    description: '这是一个列表页',
    keepAlive: true,
  },
  component: () => import('@/pages/list/index'),
  children: [
    {
      path: 'test',
      component: () => import('@/pages/list/child/test/index'),
    },
  ],
}, {
  path: '/detail/:id',
  props: true,
  name: 'Detail',
  meta: {
    title: '详情页',
  },
  component: () => import('@/pages/detail/index'),
  beforeEnter(to, from, next) {
    console.log('detail route before enter');
    next();
  },
}];

export default new Router({
  routes,
  mode: 'hash',
  // base: '/ke/',
  // linkActiveClass: 'active-link',
  // linkExactActiveClass: 'exact-active-link',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (from.meta.keepAlive) {
      /* eslint-disable */
      from.meta.savedPosition = document.body.scrollTop;
    }
    return { x: 0, y: to.meta.savedPosition || 0 };
  },
});
