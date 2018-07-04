<template>
  <div class="main">
    首页
    <widget-header></widget-header>
    <div class="content">
      <p class="info">这是内容介绍一</p>
      <p class="info-item">这是内容介绍一细节</p>
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
    font-size: .3rem;
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
