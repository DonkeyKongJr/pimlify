import OrderMenu from './components/OrderMenu.vue';
import RestaurantComponent from './components/RestaurantComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import LoginComponent from './components/LoginComponent.vue';

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
  },
  {
    path: '/register',
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
