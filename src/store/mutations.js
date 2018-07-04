import * as types from './mutation-types';

export default {
  // 是否显示删除按钮
  [types.CUSTOMER](state, customer) {
    state.customer = customer;
  },
};
