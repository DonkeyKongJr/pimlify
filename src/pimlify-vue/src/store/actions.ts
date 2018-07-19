import State from './state';
import { ActionTree, ActionContext } from 'vuex';
import { OrderMenu, AvailableOrder, Restaurant } from './mutation-types';
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
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          restaurants.push(doc.data() as Restaurant);
        });
        commit('setRestaurants', { items: restaurants });
      });

    const restaurantMock = new Restaurant();
    restaurantMock.name = 'test';
  }
};

export default actions;
