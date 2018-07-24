import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import State from './state';

Vue.use(Vuex);

const store = new Vuex.Store<State>({
  actions,
  getters,
  mutations,
  state: new State()
});

export default store;

export * from './models';
