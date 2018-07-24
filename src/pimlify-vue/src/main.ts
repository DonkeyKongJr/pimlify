import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from './components/App.vue';

import firebase from 'firebase';
import 'firebase/firestore';
import VueFire from 'vuefire';
import 'vuetify/dist/vuetify.css';

import './vuetify-fix.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookOpen, faCoffee, faHome, faMinus, faPlus, faSave, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { firebaseConfig } from './firebase-config';
import router from './router';
import store from './store';

library.add(faUtensils, faCoffee, faHome, faBookOpen, faPlus, faMinus, faSave);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuetify);
Vue.use(VueFire);
Vue.use(VueRouter);

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

// tslint:disable-next-line:no-unused-expression
new Vue({
  created: () => {
    store.dispatch('loadRestaurants');
  },
  el: '#app',
  render: h => h(App),
  router,
  store
});
