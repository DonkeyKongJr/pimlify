<template>
<v-card v-if="currentMenu !== undefined">
    <v-card-title>
        {{currentMenu.title}}
    </v-card-title>
    <v-data-table
    :items="currentMenu.availableItems"
    class="elevation-1"
    hide-actions
    hide-headers
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.orderNr }}</td>
      <td class="text-xs-right">{{ props.item.title }}</td>
      <td class="text-xs-right">{{ props.item.price }}</td>
      <td class="text-xs-right">{{ props.item.ingredients }}</td>
    </template>
  </v-data-table>
</v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import store, { Menu as OrderMenuModel } from "../store";
import { Route } from "vue-router";

@Component
export default class OrderMenu extends Vue {
  beforeRouteEnter(to: Route, from: Route, next: (() => void)) {
    let menu = store.state.menus.find(m => m.id === to.params.menuId)
    store.commit("setCurrentMenu", {item: menu});
  }

  public get currentMenu() {
    return this.$store.state.currentMenu;
  }
}
</script>

<style>
</style>
