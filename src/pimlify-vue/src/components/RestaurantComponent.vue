<template>
<v-card v-if="restaurants !== undefined">
    <v-card-title>
        Restaurants
    </v-card-title>
    <v-data-table
    :items="restaurants"
    class="elevation-1"
    hide-actions
    hide-headers
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
    </template>
  </v-data-table>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class RestaurantComponent extends Vue {
  public get restaurants() {
    return this.$store.state.restaurants;
  }
}
</script>

<style>
</style>
