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
            <v-icon>fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/restaurant">
          <v-list-tile-action>
             <v-icon>fa-utensils</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Restaurants
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Pimlify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/orders">
        <v-badge left>
          <span slot="badge" v-if="ordersCount !== 0">{{ordersCount}}</span>
          <v-icon>fa-shopping-basket</v-icon>
        </v-badge>
      </v-btn>
      <v-menu v-if="isUserLoggedIn && userInfo"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y>
        <v-btn slot="activator" icon>
          <v-icon>fa-user</v-icon>
        </v-btn>
        <v-card>
          Hello {{userInfo.firstname}}, have a nice day!
          <v-btn @click="logout" >
            Logout
          </v-btn>
        </v-card>
      </v-menu>      
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
    <v-footer app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import App from './app';
export default App;
</script>

<style>
</style>
