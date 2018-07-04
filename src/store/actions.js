import * as types from './mutation-types';

export default {
  setCustomer({ commit }, bool) {
    commit(types.CUSTOMER, bool);
  },
};
