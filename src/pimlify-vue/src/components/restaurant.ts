import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Restaurat extends Vue {
  public headers = [
    { text: 'Name', value: 'name' },
    { text: 'Location', value: 'location' },
    { text: 'Actions', value: 'id' }
  ];
  public get restaurants() {
    return this.$store.state.restaurants;
  }
}
