<template>
  <div class="main">
    {{title}}
    <widget-header></widget-header>
    <div class="content">
      <p class="info">{{info}}</p>
      <router-link to="/detail/:id">
        <p class="info-item">点击跳转到详情页</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import WidgetHeader from '@/components/common/WidgetHeader';
import { mapActions } from 'vuex';

export default {
  name: 'list',
  components: {
    WidgetHeader,
  },
  data() {
    return {
      title: '列表页',
      info: '这是列表页介绍一',
    };
  },
  methods: {
    ...mapActions(['setCustomer']),
  },
  mounted() {
    this.setCustomer('beike');
  },
};
</script>
<style lang="less" scoped>
  .main {
    font-size: 40px;
    .info {
      font-size: 30px;
    }
    .content {
      .info-item {
        background: #3b3845;
        color: #fff;
        font-size: 28px;
        line-height: 200px;
        width: 320px;
        height: 200px;
        margin: 0 auto;
      }
    }
  }
</style>
