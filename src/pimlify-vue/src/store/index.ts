import Vue from "vue";
import Vuex from "vuex";

import State from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const store =  new Vuex.Store<State>({
  state: new State(),
  actions: actions,
  mutations: mutations,
  getters: getters
});

export default store;

export * from "./mutation-types";
