import { ActionTree } from 'vuex';
import { db } from '../main';
import { Restaurant } from './mutation-types';
import State from './state';

const actions: ActionTree<State, State> = {
  loadRestaurants({ commit, state }) {
    return db
      .collection('restaurant')
      .get()
      .then(querySnapshot => {
        const restaurants: Restaurant[] = [];
        querySnapshot.forEach(doc => {
          const restaurant = doc.data() as Restaurant;
          restaurant.id = doc.id;
          restaurants.push(restaurant);
        });
        commit('setRestaurants', { items: restaurants });
      });
  },
  saveRestaurant({ commit, state }, { restaurant }) {
    return db
      .collection('restaurant')
      .doc(restaurant.id)
      .set(restaurant);
  }
};

export default actions;
