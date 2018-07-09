<template>
  <div class="main">
    {{title}}
    <div class="content">
      <p class="info">{{info}}</p>
      <div class="scroll-wrapper">
        <router-link to="/done-task/detail/123">
          <p class="info-item">点击跳转到详情页</p>
        </router-link>
        <router-link to="/">
          <p class="info-item">回到首页</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import WidgetHeader from '@/components/header/Header';

export default {
  name: 'list',
  components: {
    WidgetHeader,
  },
  data() {
    return {
      title: 'done task list',
      info: 'done task info',
    };
  },
  computed: {
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
      font-size: 35px;
    }
    .content {
      .info-item {
        display: inline-block;
        background: #3b3845;
        color: #fff;
        font-size: 28px;
        line-height: 200px;
        width: 320px;
        height: 200px;
        margin: 50px auto;
        bottom: 700px;
      }
    }
  }
</style>
