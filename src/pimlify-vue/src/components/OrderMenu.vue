<template>
<v-card v-if="currentRestaurant !== undefined">
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
          <v-list-tile @click="showAddItemDialog = true">
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
              <v-list-tile-title><v-icon>fa-trash</v-icon> Delete</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </td>
    </template>
  </v-data-table>
  <v-layout row justify-center>
    <v-dialog v-model="showAddItemDialog" persistent max-width="290">
      <v-form ref="addOrderItemForm" v-model="addOrderItemValid" v-if="addItem !== undefined" @submit="addOrderItem(addItem)" >
        <v-card>
          <v-card-title class="headline">Add new item</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="addItem.title"
              label="Title" :rules="titleRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="addItem.price"
              label="Price"
              type="number"
              required
            ></v-text-field>
            <v-text-field
              v-model="addItem.orderNr"
              label="Order Number"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="darken-1" flat type="submit">Add new item</v-btn>
            <v-btn color="darken-1" flat @click.native="showAddItemDialog = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-layout>
</v-card>
</template>

<script lang="ts">
import OrderMenu from './order-menu';
export default OrderMenu;
</script>

<style>
</style>
