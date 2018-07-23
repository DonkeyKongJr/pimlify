import State from "./state";

export default {
    getRestaurantById:(state:State) => (id: string) => {
        return state.restaurants.find(restaurant => restaurant.id === id);
    }
};