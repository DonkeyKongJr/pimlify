import { MutationTree } from 'vuex';
import { AutoId } from '../auto-id';
import State from './state';

const mutations: MutationTree<State> = {
  setRestaurants(state, { items }) {
    state.restaurants = items;
  },
  addOrderItem(state, { restaurantId, order }) {
    const restaurant = state.restaurants.find(res => res.id === restaurantId);
    if (restaurant) {
      order.id = AutoId.newId();
      restaurant.menu.push(order);
    }
  }
};

export default mutations;
