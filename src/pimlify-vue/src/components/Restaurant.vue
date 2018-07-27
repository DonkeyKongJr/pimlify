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
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.location }}</td>
      <td><v-btn :to="{name:'menu',params:{restaurantId: props.item.id}}">Show Menu</v-btn></td>
    </template>
  </v-data-table>
</v-card>
</template>

<script lang="ts">
import Restaurant from './restaurant';
export default Restaurant;
</script>

<style>
</style>
