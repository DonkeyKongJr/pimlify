import State from './state';
import { ActionTree, ActionContext } from 'vuex';
import { OrderMenu, AvailableOrder, Restaurant, User } from './mutation-types';
import { db } from '../main';

const actions: ActionTree<State, State> = {
  loadAllOrderMenus({ commit, state }) {
    let orderMenus = new OrderMenu(1, 'Pims Thai Küche', [
      new AvailableOrder('01', 'Test Eins', 5),
      new AvailableOrder('02', 'Bab Ma Guk', 4.8),
      new AvailableOrder('03', 'Pappo', 7.4),
      new AvailableOrder('04', 'Testo', 4.5),
      new AvailableOrder('05', 'Pasta', 4.2),
      new AvailableOrder('06', 'Te Stein S', 8.3),
      new AvailableOrder('07', 'De la dada', 3.5),
      new AvailableOrder('08', 'Tallaesto', 5.9),
      new AvailableOrder('09', 'Gatto Te', 3.5),
      new AvailableOrder('10', 'Ado Amore', 1.1)
    ]);

    commit('setOrderMenus', { items: orderMenus });
  },
  setCurrentOrderFromMenuId({ commit, state }, { id }) {
    let menus = state.orderMenus.filter(item => item.id === id);
    if (menus.length > 0) {
      commit('setCurrentOrderMenu', { item: menus[0] });
    }
  },
  loadAllRestaurantsFromFireBase({ commit, state }) {
    let restaurants: Restaurant[] = [];

    db.collection('restaurant')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const restaurant = doc.data() as Restaurant;
          restaurant.id = doc.id;
          restaurants.push(restaurant);
        });
        commit('setRestaurants', { items: restaurants });
      });

    const restaurantMock = new Restaurant();
    restaurantMock.name = 'test';
  },
  getAdditionalUserData({ commit, state }, { id }) {
    db.collection('user')
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
