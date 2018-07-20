import State from "./state";
import { ActionTree, ActionContext } from "vuex";
import { Menu, AvailableItem, Restaurant } from "./mutation-types";
import { db } from "../main";

const actions: ActionTree<State, State> = {
  loadMenus({ commit, state }) {
    db.collection("menu")
      .get()
      .then(querySnapshot => {
        let menus: Menu[] = [];
        querySnapshot.forEach(doc => {
          const menu = doc.data() as Menu;
          menu.id = doc.id;
          menus.push(menu);
        });
        commit("setMenus", { items: menus });
      });
  },
  setCurrentOrderFromMenuId({ commit, state }, { id }) {
    let menus = state.menus.filter(item => item.id === id);
    if (menus.length > 0) {
      commit("setCurrentMenu", { item: menus[0] });
    }
  },
  loadRestaurants({ commit, state }) {
    db.collection("restaurant")
      .get()
      .then(querySnapshot => {
        let restaurants: Restaurant[] = [];
        querySnapshot.forEach(doc => {
          const restaurant = doc.data() as Restaurant;
          restaurant.id = doc.id;
          restaurants.push(restaurant);
        });
        commit("setRestaurants", { items: restaurants });
      });
  }
};

export default actions;
