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
      <td><v-btn :to="{name:'menu',params:{menuId: props.item.id}}">Show Menu</v-btn></td>

    </template>
  </v-data-table>
</v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Restaurat extends Vue {
  public headers = [
    { text: "Name", value: "name" },
    { text: "Location", value: "location" },
    { text: "Actions", value: "id"}
  ];
  public get restaurants() {
    return this.$store.state.restaurants;
  }
}
</script>

<style>
</style>
