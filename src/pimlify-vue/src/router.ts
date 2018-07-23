import OrderMenu from './components/OrderMenu.vue';
import Restaurant from './components/Restaurant.vue';
import Home from './components/Home.vue';
import VueRouter from 'vue-router';
import Component from "vue-class-component";

Component.registerHooks(['beforeRouteEnter']);

const routes = [
  {
    path: '/menu/:restaurantId',
    component: OrderMenu,
    name: 'menu',
    props: true
  },
  {
    path: '/restaurant',
    component: Restaurant,
    name: 'restaurant'
  },{
    path: '/',
    component: Home,
    name: 'home'
  }
];

export default new VueRouter({
  routes
});
