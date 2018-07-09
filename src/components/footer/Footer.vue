<template>
  <footer class="widget-footer">
    <router-link class="guide-item" to="/">
      <span>首页</span>
    </router-link>
    <router-link class="guide-item" to="/data">
      <span>数据</span>
    </router-link>
    <router-link class="guide-item" to="/mine">
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {
    const a = this.$route.path.indexOf('mine');
    console.log(this.$route.path, a);
  },
};
</script>

<style lang="less" scoped>
.widget-footer {
  font-size: 30px;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  background-color: #fff;
  z-index: 100;
  left: 0;
  right: 0;
  display: flex;
  .guide-item{
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    text-decoration:none;
    color: #999;
    height: 40px;
    line-height: 40px;
    padding: 10px;
    box-sizing: content-box;
    &.exact-active-link {
      color: #1797e6;
    }
    .icon_style{
    }
    span{
    }
  }
}
</style>
