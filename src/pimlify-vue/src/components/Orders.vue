<template>
    <v-card>
        <v-card-title>
        Orders
        </v-card-title>
        <v-data-table
            :items="orders"
            class="elevation-1"
            hide-actions
            hide-headers>
            <template slot="items" slot-scope="props">
            <td>{{ props.item.orderNr }}</td>
            <td class="text-xs-right">{{ props.item.title }}</td>
            <td class="text-xs-right">{{ props.item.price }}</td>
            <td class="text-xs-right">{{ props.item.allergenic }}</td>
            <td class="text-xs-right">        
                <v-btn flat icon @click="removeOrder(props.item.id)">
                <v-icon>fa-trash</v-icon>
                </v-btn>
            </td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Order } from '../store';

@Component
export default class Orders extends Vue {
  public get orders() {
    return this.$store.state.orders;
  }

  public removeOrder(id: string) {
    this.$store.commit('removeOrder', { id: id });
  }
}
</script>

<style>
</style>
