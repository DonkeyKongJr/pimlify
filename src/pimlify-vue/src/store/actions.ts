import State from "./state";
import { ActionTree, ActionContext } from "vuex";
import { AvailableItem, Restaurant } from "./mutation-types";
import { db } from "../main";

const actions: ActionTree<State, State> = {
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
