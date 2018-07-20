<template>
<v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <font-awesome-icon icon="home" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
                <v-list-tile to="/restaurant">
          <v-list-tile-action>
             <font-awesome-icon icon="utensils" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Restaurants
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/menu">
          <v-list-tile-action>
            <font-awesome-icon icon="home" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Menu
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="orange" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Pimlify</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout
          justify-center
          align-center
        >
        <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="orange" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class App extends Vue {
  public get message() {
    return this.$store.state.message;
  }

  public drawer: boolean = false;
}
</script>

<style>
</style>
