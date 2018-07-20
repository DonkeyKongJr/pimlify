import OrderMenu from './components/OrderMenu.vue';
import Restaurant from './components/Restaurant.vue';
import Home from './components/Home.vue';
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/menu/:menuId',
    component: OrderMenu,
    name: 'menu'
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
