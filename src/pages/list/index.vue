<template>
  <div class="main">
    {{title}}
    <router-view/>
    <div class="content">
      <p class="info">{{info}}</p>
      <div class="scroll-wrapper">
        这是一个很长的内容，导致滚动条产生
        <router-link to="/detail/123">
          <p class="info-item">点击跳转到详情页</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import WidgetHeader from '@/components/common/WidgetHeader';
import { mapActions } from 'vuex';
import axios from 'axios';

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
  computed: {
  },
  methods: {
    ...mapActions(['setCustomer']),
  },
  mounted() {
    this.setCustomer('beike');

    axios.post('/api/login/account', {
      password: '888888',
      username: 'admin',
    })
      .then((response) => {
        console.log(response);
        console.log(`mocker---${response.data.data.username}`);
      })
      .catch((error) => {
        console.log(error);
      });
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
      .scroll-wrapper {
        height: 1300px;
        background: #e2e2e2;
        color: #666;
        padding: 50px;
        font-size: 30px;
        margin: 50px auto;
        position: relative;
        .info-item {
          background: #3b3845;
          color: #fff;
          font-size: 28px;
          line-height: 200px;
          width: 320px;
          height: 200px;
          margin: 50px auto;
          position: absolute;
          bottom: 700px;
        }
      }
    }
  }
</style>
