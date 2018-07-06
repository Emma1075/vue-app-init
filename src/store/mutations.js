import * as types from './mutation-types';

export default {
  [types.CUSTOMER](state, customer) {
    state.customer = customer;
  },
};
