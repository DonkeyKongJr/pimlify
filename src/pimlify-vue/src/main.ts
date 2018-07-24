import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from './components/App.vue';

import firebase from 'firebase';
// tslint:disable-next-line:no-submodule-imports
import 'firebase/firestore';
import VueFire from 'vuefire';
// tslint:disable-next-line:no-submodule-imports
import 'vuetify/dist/vuetify.css';

import './vuetify-fix.css';

// tslint:disable-next-line:no-submodule-imports
import '@fortawesome/fontawesome-free/css/all.css';

import { firebaseConfig } from './firebase-config';
import router from './router';
import store from './store';

Vue.use(Vuetify, {
  iconfont: 'fa'
});
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
