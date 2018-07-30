import firebase from 'firebase';
import Vue from 'vue';
import Component from 'vue-class-component';
import router from '../router';
import { User } from '../store';

@Component
export default class LoginComponent extends Vue {
  public user: User = new User();
  public successAlert: boolean = false;
  public errorMessage: string = '';
  public isUserLoggedIn: boolean = false;

  public emailRules = [(v: any) => !!v || 'E-mail is required', (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'];

  public passwordRules = [(v: any) => !!v || 'Password is required'];

  constructor() {
    super();
    this.getUserAuthState();
  }

  public get userInfo() {
    return this.$store.state.userInfo as User;
  }

  public login() {
    if ((this.$refs.form as any).validate()) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          this.errorMessage = '';
          this.clear();
          router.push('/restaurant');
        })
        .catch(error => {
          this.errorMessage = error.message;
        });
    }
  }

  public logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.errorMessage = '';
      })
      .catch(error => {
        this.errorMessage = error.message;
      });
  }

  public clear() {
    (this.$refs.form as any).reset();
  }

  private getUserAuthState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('getAdditionalUserData', {
          id: user.uid
        });
        this.isUserLoggedIn = user !== undefined ? true : false;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }
}
