import firebase from 'firebase';
import { ActionTree } from 'vuex';
import { Restaurant, User } from './models';
import State from './state';

const actions: ActionTree<State, State> = {
  loadRestaurants({ commit, state }) {
    return firebase
      .firestore()
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
    return firebase
      .firestore()
      .collection('restaurant')
      .doc(restaurant.id)
      .set(JSON.parse(JSON.stringify(restaurant)));
  },
  getAdditionalUserData({ commit, state }, { id }) {
    firebase
      .firestore()
      .collection('user')
      .doc(id)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.exists) {
          const user = querySnapshot.data() as User;
          commit('setUser', { item: user });
        } else {
          console.log('user document does not exist');
        }
      });
  }
};

export default actions;
