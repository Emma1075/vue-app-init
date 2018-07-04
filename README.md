# vue-app-init
> dependent on vue-cli, add personal config
  
## 配置
### fastclick
使用fastclick, 解决移动端项目点击事件有300秒延迟问题
```js
// 命令行安装   cnpm i fastclick -S
// main.js文件中增加
import FastClick from 'fastclick'
FastClick.attach(document.body)
```
### px2rem-loader
参考教程：[vue-cli 使用 px2rem](https://shimo.im/docs/38m7jKtwrgQ7w2m1/)

### 路由懒加载写法
路由懒加载可以让进入首屏时不用加载过多资源，从而减少首屏加载时间

```js
// 非懒加载写法
import Index from '@/pages/index/index';
export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
    },
    component: Index,
  }],
})

// 懒加载写法
export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: () => import('@/pages/index/index'),
  }]
})
```


### 开启productionGzip
于减少生产环境打包时文件体积，压缩文件  
需要先安装 `cnpm install --save-dev compression-webpack-plugin`

在 `config/index.js` 中找到 `productionGzip`, 改 false 为 true

## 注意事项
### 组件书写顺序
```js
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},
  
  methods: {},

  created() {},

  mounted() {},

  destroyed() {}
};

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
