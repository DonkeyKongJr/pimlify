import Vue from 'vue';
import App from './components/App.vue';

import Vuetify from 'vuetify';
import VueFire from 'vuefire';
import firebase from 'firebase';
import 'firebase/firestore';

import 'vuetify/dist/vuetify.css';

import './vuetify-fix.css';

import store from './store';
import { firebaseConfig } from './firebase-config';

Vue.use(Vuetify);
Vue.use(VueFire);

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
