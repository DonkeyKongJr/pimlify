import { MutationTree } from 'vuex';
import State from './state';
import { AutoId} from "../auto-id";

const mutations: MutationTree<State> = {
  setRestaurants(state, { items }) {
    state.restaurants = items;
  },
  addOrderItem(state, {restaurantId,order}){
    let restaurant = state.restaurants.find(res => res.id === restaurantId);
    if(restaurant){
      order.id = AutoId.newId();
      restaurant.menu.push(order);
    }
  }
};

export default mutations;
