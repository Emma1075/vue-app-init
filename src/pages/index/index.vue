<template>
  <div class="main">
    {{title}}
    <widget-header></widget-header>
    <div class="content">
      <p class="info">{{info}}</p>
      <router-link to="/list">
        <p class="info-item">点击跳转到列表页</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import WidgetHeader from '@/components/common/WidgetHeader';
import { mapActions } from 'vuex';

export default {
  name: 'index',
  components: {
    WidgetHeader,
  },
  data() {
    return {
      title: '首页',
      // info: '这是首页介绍一',
      info: this.chance.sentence(),
    };
  },
  methods: {
    ...mapActions(['setCustomer']),
  },
  mounted() {
    this.setCustomer('beike');
    console.log(this.chance.sentence());
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
