import Vue from "vue";
import App from "./components/App.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import "vuetify/dist/vuetify.css";

import "./vuetify-fix.css";

import store from "./store";
import router from "./router";

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});

// Lets load all menus :D
store.dispatch("loadAllOrderMenus");

store.commit("setCurrentOrderMenu", { item: store.state.orderMenus });
