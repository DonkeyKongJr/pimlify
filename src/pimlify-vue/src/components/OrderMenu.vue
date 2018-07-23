<template>
<v-card>
    <v-card-title>
        {{currentRestaurant.name}}
    </v-card-title>
    <v-data-table
    :items="currentRestaurant.menu"
    class="elevation-1"
    hide-actions
    hide-headers
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.orderNr }}</td>
      <td class="text-xs-right">{{ props.item.title }}</td>
      <td class="text-xs-right">{{ props.item.price }}</td>
      <td class="text-xs-right">{{ props.item.allergenic }}</td>
    </template>
  </v-data-table>
</v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import store, { Menu as OrderMenuModel } from "../store";
import { Route } from "vue-router";

Component.registerHooks(["beforeRouteEnter"])

@Component
export default class OrderMenu extends Vue {
  beforeRouteEnter(to: Route, from: Route, next: (() => void)) {
    return store.dispatch("loadRestaurants").then(() => {
      let menu = store.state.restaurants.find(m => m.id === to.params.restaurantId)
      store.commit("setCurrentRestaurant", {item: menu});
      next();
    });
  }

  public get currentRestaurant(){
    return this.$store.state.currentRestaurant;
  }
}
</script>

<style>
</style>
