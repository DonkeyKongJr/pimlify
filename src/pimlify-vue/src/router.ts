import OrderMenu from './components/OrderMenu.vue';
import Restaurant from './components/Restaurant.vue';
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
  }
];

export default new VueRouter({
  routes
});
