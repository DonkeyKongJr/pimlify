import State from "./state";
import { ActionTree, ActionContext } from "vuex";
import { Menu, AvailableItem, Restaurant } from "./mutation-types";
import { db } from "../main";

const actions: ActionTree<State, State> = {
  // setCurrentOrderFromMenuId({ commit, state }, { id }) {
  //   let restaurants = state.restaurants.filter(item => item.id === id);
  //   if (restaurants.length > 0) {
  //     commit("setCurrentRestaurant", { item: restaurants[0] });
  //   }
  // },
  loadRestaurants({ commit, state }) {
    return db.collection("restaurant")
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
