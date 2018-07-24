import { MutationTree } from 'vuex';
import State from './state';
import { OrderMenu, User } from './mutation-types';

const mutations: MutationTree<State> = {
  setOrderMenus(state, { items }) {
    state.orderMenus = items;
  },
  setCurrentOrderMenu(state, { item }) {
    state.currentOrderMenu = item;
  },
  setRestaurants(state, { items }) {
    state.restaurants = items;
  },
  setUser(state, { item }) {
    state.userInfo = item;
  }
};

export default mutations;
