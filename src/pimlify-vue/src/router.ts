import Component from 'vue-class-component';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import OrderMenu from './components/OrderMenu.vue';
import Register from './components/Register.vue';
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
    path: '/'
  },
  {
    component: Register,
    name: 'register',
    path: '/register'
  },
  {
    component: Login,
    name: 'login',
    path: '/login'
  }
];

export default new VueRouter({
  routes
});
