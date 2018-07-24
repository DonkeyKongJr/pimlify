import Component from 'vue-class-component';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import OrderMenu from './components/OrderMenu.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import Restaurant from './components/Restaurant.vue';

Component.registerHooks(['beforeRouteEnter']);

const routes = [
  {
    component: OrderMenu,
    name: 'menu',
    path: '/menu/:restaurantId'
  },
  {
    component: Restaurant,
    name: 'restaurant',
    path: '/restaurant'
  },
  {
    component: Home,
    name: 'home',
    path: '/',
  },
  {
    component: RegisterComponent,
    name: 'register',
    path: '/register',
  }
];

export default new VueRouter({
  routes
});
