import Vue from 'vue';
import App from './components/App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import 'vuetify/dist/vuetify.css';
import VueFire from 'vuefire';
import firebase from 'firebase';
import 'firebase/firestore';

import './vuetify-fix.css';

import store from './store';
import router from './router';
import { firebaseConfig } from './firebase-config';

Vue.use(Vuetify);
Vue.use(VueFire);
Vue.use(VueRouter);

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

// Lets load all menus :D
store.dispatch('loadAllOrderMenus');

store.commit('setCurrentOrderMenu', { item: store.state.orderMenus });
