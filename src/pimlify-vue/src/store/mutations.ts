import { MutationTree } from 'vuex';
import State from './state';
import { AutoId } from '../auto-id';
import { User } from './mutation-types';

const mutations: MutationTree<State> = {
    setRestaurants(state, { items }) {
        state.restaurants = items;
    },
    addOrderItem(state, { restaurantId, order }) {
        let restaurant = state.restaurants.find(res => res.id === restaurantId);
        if (restaurant) {
            order.id = AutoId.newId();
            restaurant.menu.push(order);
        }
    },
    setUser(state, { item }) {
        state.userInfo = item;
    }
};

export default mutations;
