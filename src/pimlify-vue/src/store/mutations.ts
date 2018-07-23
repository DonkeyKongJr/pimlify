import { MutationTree } from 'vuex';
import State from './state';

const mutations: MutationTree<State> = {
  setCurrentRestaurant(state, { item }) {
    state.currentRestaurant = item;
  },
  setRestaurants(state, { items }) {
    state.restaurants = items;
  },
  addOrderItem(state, {restaurantId,item}){

    let restaurant = state.restaurants.filter(res => res.id === restaurantId);
    if(restaurant){
      restaurant[0].menu.push(item);
    }
  }
};

export default mutations;
