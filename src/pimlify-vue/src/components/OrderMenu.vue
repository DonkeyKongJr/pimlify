<template>
<v-card v-if="currentMenu !== undefined">
    <v-card-title>
        {{currentMenu.title}}
    </v-card-title>
    <v-data-table
    :items="currentMenu.availableOrders"
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
import Vue from 'vue';
import Component from 'vue-class-component';
import { Menu as OrderMenuModel } from '../store';

@Component
export default class OrderMenu extends Vue {
  public get currentMenu(): OrderMenuModel {
    return this.$store.state.currentMenu;
  }

  public set menuId(value: number) {
    this.$store.dispatch('setCurrentOrderFromMenuId', { id: value });
  }

  public get menuId() {
    return 1;
  }
}
</script>

<style>
</style>
