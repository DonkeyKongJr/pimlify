<template>
<v-card v-if="currentOrderMenu !== undefined">
    <v-card-title>
        {{currentOrderMenu.title}}
    </v-card-title>
    <v-data-table
    :items="currentOrderMenu.availableOrders"
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
import { OrderMenu as OrderMenuModel } from '../store';

@Component
export default class OrderMenu extends Vue {
  public get currentOrderMenu(): OrderMenuModel {
    return this.$store.state.currentOrderMenu;
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
