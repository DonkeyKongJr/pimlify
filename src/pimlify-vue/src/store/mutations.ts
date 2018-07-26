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
      restaurant.menu.push(order);
    }
  },
  removeOrderItem(state, { restaurantId, order }) {
    const restaurant = state.restaurants.find(res => res.id === restaurantId);
    if (restaurant) {
      const index = restaurant.menu.findIndex(o => o.id === order.id);
      if (index > -1) {
        restaurant.menu.splice(index, 1);
      }
    }
  },
  setUser(state, { item }) {
    state.userInfo = item;
  },
  addOrder(state, { order }) {
    state.orders.push(order);
  },
  removeOrder(state, { id }) {
    const index = state.orders.findIndex(o => o.id === id);
    if (index > -1) {
      state.orders.splice(index, 1);
    }
  }
};

export default mutations;
