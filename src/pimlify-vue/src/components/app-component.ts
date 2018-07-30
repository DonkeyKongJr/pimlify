import firebase from 'firebase';
import Vue from 'vue';
import Component from 'vue-class-component';
import router from '../router';
import { User } from '../store';

@Component
export default class App extends Vue {
  public drawer: boolean = false;

  public get orders() {
    return this.$store.state.orders;
  }

  public get ordersCount() {
    return this.$store.getters.ordersCount;
  }

  public isUserLoggedIn: boolean = false;

  constructor() {
    super();
    this.getUserAuthState();
  }

  public get userInfo() {
    return this.$store.state.userInfo as User;
  }

  private logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/login');
      });
  }

  private getUserAuthState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('getAdditionalUserData', {
          id: user.uid
        });
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }
}
