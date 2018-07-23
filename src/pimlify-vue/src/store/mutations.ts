import { MutationTree } from 'vuex';
import State from './state';

const mutations: MutationTree<State> = {
  setCurrentRestaurant(state, { item }) {
    state.currentRestaurant = item;
  },
  setRestaurants(state, { items }) {
    state.restaurants = items;
  }
};

export default mutations;
