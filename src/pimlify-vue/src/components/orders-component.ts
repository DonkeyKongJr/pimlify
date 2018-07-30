import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Orders extends Vue {
  public get orders() {
    return this.$store.state.orders;
  }

  public removeOrder(id: string) {
    this.$store.commit('removeOrder', { id });
  }
}
