<template>
<v-card>
    <v-card-title>
      {{currentRestaurant.name}}
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <v-btn slot="activator" icon>
          <v-icon>fa-ellipsis-v</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="save(currentRestaurant)">
            <v-list-tile-title><v-icon>fa-save</v-icon> Save</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="isAddItemDialogOpen = true">
            <v-list-tile-title><v-icon>fa-plus</v-icon> Create</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-data-table
    :items="currentRestaurant.menu"
    class="elevation-1"
    hide-actions
    hide-headers>
    <template slot="items" slot-scope="props">
      <td>{{ props.item.orderNr }}</td>
      <td class="text-xs-right">{{ props.item.title }}</td>
      <td class="text-xs-right">{{ props.item.price }}</td>
      <td class="text-xs-right">{{ props.item.allergenic }}</td>
      <td class="text-xs-right">        
        <v-btn flat icon @click="addOrder(props.item)">
          <v-icon>fa-cart-plus</v-icon>
        </v-btn>
        <v-menu bottom left>
          <v-btn slot="activator" icon>
            <v-icon>fa-ellipsis-v</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile @click="removeOrderItem(props.item)">
              <v-list-tile-title>Delete</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </td>
    </template>
  </v-data-table>
  <v-layout row justify-center>
    <v-dialog v-model="isAddItemDialogOpen" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Add new item</v-card-title>
        <v-card-text>
          <v-form ref="form" v-if="addItem !== undefined">
            <v-text-field
              v-model="addItem.title"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="addItem.price"
              label="Price"
              type="number"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" flat @click.native="addOrderItem(addItem)">Add new item</v-btn>
          <v-btn color="darken-1" flat @click.native="isAddItemDialogOpen = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>      
    </v-dialog>
  </v-layout>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import store, { Order, Restaurant } from '../store';
import { Route } from 'vue-router';

Component.registerHooks(['beforeRouteEnter']);

@Component
export default class OrderMenu extends Vue {
  public isAddItemDialogOpen: boolean = false;
  public addItem: Order = new Order();

  public get currentRestaurant() {
    return this.$store.getters.getRestaurantById(this.$route.params.restaurantId);
  }

  beforeRouteEnter(to: Route, from: Route, next: (() => void)) {
    return store.dispatch('loadRestaurants').then(() => {
      next();
    });
  }

  public addOrderItem(order: Order) {
    store.commit('addOrderItem', {
      restaurantId: this.currentRestaurant.id,
      order: order
    });
    this.isAddItemDialogOpen = false;
  }

  public removeOrderItem(order: Order) {
    store.commit('removeOrderItem', {
      restaurantId: this.currentRestaurant.id,
      order: order
    });
  }

  public addOrder(order: Order) {
    store.commit('addOrder', { order: order });
  }

  public save(restaurant: Restaurant) {
    this.$store.dispatch('saveRestaurant', { restaurant: restaurant });
  }
}
</script>

<style>
</style>
