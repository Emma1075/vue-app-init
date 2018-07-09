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
注意：
并非所有地方都需要用到 fastclick加速，两种方式解决：
- `FastClick.attach(document.body)`可以改为`FastClick.attach(document.getElementById('itemId'))`,这样避免不需要加速的地方受fastclick影响
- 在不需要加速的class上加入样式名 `needsclick`

参考文章：[折腾过后的fastclick](https://blog.csdn.net/jiunizhuai/article/details/80887668)；[fastclick源码分析](https://www.cnblogs.com/vajoy/p/5522114.html)

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

注意：懒加载写法中，直接 import 可能不被支持，需要先安装 babel-plugin-syntax-dynamic-import
```
cnpm i babel-plugin-syntax-dynamic-import -D
```

然后在 .babelrc 中增加 plugin
```
 "plugins": ["transform-vue-jsx", "istanbul", "syntax-dynamic-import"]
```

### 开启productionGzip
于减少生产环境打包时文件体积，压缩文件
需要先安装 `cnpm install --save-dev compression-webpack-plugin`

在 `config/index.js` 中找到 `productionGzip`, 改 false 为 true


### 引入 vue-cookie
- 安装 `cnpm i --save vue-cookie` 
- 引入
    - 在 main.js 入口文件中引入  `Vue.use(require('vue-cookie'))`
- 使用方法：
    1. 增加   `this.$cookie.set('cookieName', 'cookieValue')`
    2. 删除    `this.$cookie.delete('cookieName')`


### 封装 axios 请求
```js
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
      config.data = qs.stringify(config.data);
    }
    return config;
  }, error => Promise.reject(error));
  axios.interceptors.response.use(config => config, error => Promise.reject(error));
}
export default install;
```

如果要默认携带token参数
```js
axios.interceptors.request.use((config) => {
    const token = this.$cookie.get('tokenName').trim();
    if (config.method === 'post') {
      /* eslint-disable */
      config.data = qs.stringify(config.data) + `&token=${token}`;
    } else if (config.method === 'get') {
      config.params = {
        token: token,
        ...config.params
      }
    }
    return config;
  }, error => Promise.reject(error));
```

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
