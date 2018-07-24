import OrderMenu from './components/OrderMenu.vue';
import RestaurantComponent from './components/RestaurantComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import OrderMenu from "./components/OrderMenu.vue";
import Restaurant from "./components/Restaurant.vue";
import RegisterComponent from "./components/RegisterComponent.vue";
import Home from "./components/Home.vue";
import VueRouter from "vue-router";
import Component from "vue-class-component";

Component.registerHooks(["beforeRouteEnter"]);

const routes = [
  {
    path: "/menu/:restaurantId",
    component: OrderMenu,
    name: "menu"
  },
  {
    path: "/restaurant",
    component: Restaurant,
    name: "restaurant"
  },
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/register",
    component: RegisterComponent,
    name: 'register'
  },
  {
    path: '/login',
    component: LoginComponent,
    name: 'login'
  }
];

export default new VueRouter({
  routes
});
