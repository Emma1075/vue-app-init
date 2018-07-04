<template>
  <div>
    {{getCustomer}}
    <span>{{date | date-format}}</span>
    <i class="iconfont icon-loading"></i>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
  },
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    ...mapGetters(['getCustomer']),
  },
};
</script>

<style lang="less" scoped>

</style>
