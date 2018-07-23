import Vue from 'vue';
import App from './components/App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import 'vuetify/dist/vuetify.css';
import VueFire from 'vuefire';
import firebase from 'firebase';
import 'firebase/firestore';

import './vuetify-fix.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faUtensils,
  faHome,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import store from './store';
import router from './router';
import { firebaseConfig } from './firebase-config';

library.add(faUtensils);
library.add(faCoffee);
library.add(faHome);
library.add(faBookOpen);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuetify);
Vue.use(VueFire);
Vue.use(VueRouter);

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created: () => {
    return store.dispatch('loadRestaurants');
  }
});


