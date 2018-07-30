import firebase from 'firebase';
import Vue from 'vue';
import Component from 'vue-class-component';
import { db } from '../main';
import { User } from '../store';

@Component
export default class Register extends Vue {
  public user: User = new User();
  public successAlert: boolean = false;
  public errorMessage: string = '';
  public valid: boolean = true;

  public emailRules = [(v: any) => !!v || 'E-mail is required', (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'];

  public nameRules = [
    (v: any) => !!v || 'Name is required',
    (v: any) => (v && v.length > 2) || 'Name must be more than 2 characters'
  ];

  public submit() {
    if ((this.$refs.form as any).validate()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          this.createAdditionalUserData(data.user);
          this.clear();
          this.successAlert = true;
          this.errorMessage = '';
        })
        .catch(error => {
          this.errorMessage = error.message;
          this.successAlert = false;
        });
    }
  }

  public clear() {
    (this.$refs.form as any).reset();
  }

  private createAdditionalUserData(firebaseUser: firebase.User | null) {
    if (!firebaseUser) {
      return;
    }

    db.collection('user')
      .doc(firebaseUser.uid)
      .set({
        firstname: this.user.firstname,
        lastname: this.user.lastname
      });
  }
}
