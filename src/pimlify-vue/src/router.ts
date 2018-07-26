import firebase from 'firebase';
import Component from 'vue-class-component';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import OrderMenu from './components/OrderMenu.vue';
import Orders from './components/Orders.vue';
import Register from './components/Register.vue';
import Restaurant from './components/Restaurant.vue';
import ResetPassword from './components/ResetPassword.vue';

Component.registerHooks(['beforeRouteEnter']);

const routes = [
  {
    beforeEnter: requireAuth,
    component: OrderMenu,
    name: 'menu',
    path: '/menu/:restaurantId'
  },
  {
    beforeEnter: requireAuth,
    component: Restaurant,
    name: 'restaurant',
    path: '/restaurant'
  },
  {
    beforeEnter: requireAuth,
    component: Home,
    name: 'home',
    path: '/'
  },
  {
    beforeEnter: requireAuth,
    component: Orders,
    name: 'orders',
    path: '/orders'
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
  },
  {
    component: ResetPassword,
    name: 'reset-password',
    path: '/reset-password'
  }
];

function requireAuth(to, from, next) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      next();
    } else {
      next('/login');
    }
  });
}

export default new VueRouter({
  routes
});
