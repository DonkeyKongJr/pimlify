import Login from './components/Login.vue';
import OrderMenu from './components/OrderMenu.vue';
import Restaurant from './components/Restaurant.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue';
import VueRouter from 'vue-router';
import Component from 'vue-class-component';

Component.registerHooks(['beforeRouteEnter']);

const routes = [
    {
        path: '/menu/:restaurantId',
        component: OrderMenu,
        name: 'menu'
    },
    {
        path: '/restaurant',
        component: Restaurant,
        name: 'restaurant'
    },
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    }
];

export default new VueRouter({
    routes
});
