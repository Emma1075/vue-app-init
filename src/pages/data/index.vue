<template>
  <div class="main">
    {{title}}
    <div class="content">
      <p class="info">{{info}}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'data',
  data() {
    return {
      title: 'data',
      info: 'data page',
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
