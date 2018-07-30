import Vue from 'vue';
import Component from 'vue-class-component';
import store from '../store/index';

@Component
export default class Restaurat extends Vue {
  public headers = [
    { text: 'Name', value: 'name' },
    { text: 'Location', value: 'location' },
    { text: 'Actions', value: 'id' }
  ];

  public beforeRouteEnter(to, from, next) {
    store.dispatch('loadRestaurants').then(() => {
      next();
    });
  }
  public get restaurants() {
    return this.$store.state.restaurants;
  }
}
