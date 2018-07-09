<template>
  <div class="main">
    {{title}}
    <!--<widget-header></widget-header>-->
    <div class="content">
      <p class="info">{{info}}</p>
    </div>
  </div>
</template>
<script>
import WidgetHeader from '@/components/header/Header';

export default {
  name: 'index',
  components: {
    WidgetHeader,
  },
  data() {
    return {
      title: '我的信息',
      info: '我的信息展示',
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style lang="less" scoped>
  .main {
    font-size: 40px;
    .info {
      font-size: 30px;
    }
  }
</style>
