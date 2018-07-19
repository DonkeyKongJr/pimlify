import { MutationTree } from "vuex";
import State from "./state";
import { OrderMenu } from "./mutation-types";

const mutations: MutationTree<State> = {
  setOrderMenus(state, { items }) {
    state.orderMenus = items;
  },
  setCurrentOrderMenu(state, { item }) {
    state.currentOrderMenu = item;
  }
};

export default mutations;
