import Vue from 'vue';
import App from "./components/App.vue";

import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.css'

import './vuetify-fix.css'

import store from './store'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});

// new Vue({
//   el:'#app',
//   components:{app},
//   template: "<div><app></app></div>"
// })