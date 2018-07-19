<template>
<v-card v-if="restaurants !== undefined">
    <v-card-title class="justify-center">
        <b>Restaurants</b>
    </v-card-title>
    <v-data-table
    :items="restaurants"
    :headers="headers"
    class="elevation-1"
    hide-actions
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.location }}</td>

    </template>
  </v-data-table>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class RestaurantComponent extends Vue {
  data() {
    return {
      headers: [
        { text: 'Id', value: 'id', sortable: false },
        { text: 'Name', value: 'name' },
        { text: 'Location', value: 'location' }
      ]
    };
  }
  public get restaurants() {
    return this.$store.state.restaurants;
  }
}
</script>

<style>
</style>
