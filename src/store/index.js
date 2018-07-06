import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import defaultState from './state/state';

const state = defaultState;

const isDev = process.env.NODE_ENV === 'development';

/* eslint-disable */
export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state,
    getters,
    actions,
    mutations,
    // modules: {}
  });
  // 增加vuex 的热更新
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations',
      './actions',
      './getters'
    ], () => {
      const newState = require('./state/state').default;
      const newMutations = require('./mutations').default;
      const newActions = require('./actions').default;
      const newGetters = require('./getters').default;

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store;
};
