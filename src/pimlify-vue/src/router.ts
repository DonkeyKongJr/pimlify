import OrderMenu from './components/OrderMenu.vue';
import RestaurantComponent from './components/RestaurantComponent.vue';
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/menu/:menuId',
    component: OrderMenu,
    name: 'menu'
  },
  {
    path: '/restaurant',
    component: RestaurantComponent,
    name: 'restaurant'
  }
];

export default new VueRouter({
  routes
});
