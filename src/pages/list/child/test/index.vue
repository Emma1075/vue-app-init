<template>
  <div class="main">
    <hr>
    {{title}}
    <div class="content">
      <p class="info">{{info}}</p>
    </div>
    <hr>
  </div>
</template>
<script>
import WidgetHeader from '@/components/common/WidgetHeader';
import { mapActions } from 'vuex';

export default {
  name: 'test',
  components: {
    WidgetHeader,
  },
  data() {
    return {
      title: 'test',
      info: 'test lalala',
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
