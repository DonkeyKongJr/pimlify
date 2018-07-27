import Vue from 'vue';
import Component from 'vue-class-component';
import { Route } from 'vue-router';
import store, { Order, Restaurant } from '../store';

Component.registerHooks(['beforeRouteEnter']);

@Component
export default class OrderMenu extends Vue {
  public showAddItemDialog: boolean = false;
  public addOrderItemValid: boolean = false;
  public addItem: Order = new Order();
  public titleRules = [v => !!v || 'Title is required'];

  public get currentRestaurant() {
    return this.$store.getters.getRestaurantById(this.$route.params.restaurantId);
  }

  public beforeRouteEnter(to: Route, from: Route, next: (() => void)) {
    return store.dispatch('loadRestaurants').then(() => {
      next();
    });
  }

  public addOrderItem(order: Order) {
    if (!(this.$refs.addOrderItemForm as any).validate()) {
      return;
    }
    store.commit('addOrderItem', {
      restaurantId: this.currentRestaurant.id,
      order
    });
    this.addItem = new Order();
    this.showAddItemDialog = false;
  }

  public removeOrderItem(order: Order) {
    store.commit('removeOrderItem', {
      restaurantId: this.currentRestaurant.id,
      order
    });
  }

  public addOrder(order: Order) {
    store.commit('addOrder', { order });
  }

  public save(restaurant: Restaurant) {
    this.$store.dispatch('saveRestaurant', { restaurant });
  }
}
