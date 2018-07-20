import { MutationTree } from 'vuex';
import State from './state';

const mutations: MutationTree<State> = {
  setMenus(state, { items }) {
    state.menus = items;
  },
  setCurrentMenu(state, { item }) {
    state.currentMenu = item;
  },
  setRestaurants(state, { items }) {
    state.restaurants = items;
  }
};

export default mutations;
