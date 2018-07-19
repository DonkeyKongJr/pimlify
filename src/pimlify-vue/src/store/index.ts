import Vue from "vue";
import Vuex from "vuex";

import State from "./state";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: new State(),
  actions: actions,
  mutations: mutations
});

export * from "./mutation-types";
