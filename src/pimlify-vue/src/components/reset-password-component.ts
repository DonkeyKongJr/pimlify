import firebase from 'firebase';
import Vue from 'vue';
import Component from 'vue-class-component';
import { User } from '../store/models/user';

@Component
export default class ResetPassword extends Vue {
  public user: User = new User();
  public successAlert: boolean = false;
  public errorMessage: string = '';
  public valid: boolean = true;

  public emailRules = [(v: any) => !!v || 'E-mail is required', (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'];

  public reset() {
    if ((this.$refs.form as any).validate()) {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          this.successAlert = true;
          this.errorMessage = '';
        })
        .catch(error => {
          this.successAlert = false;
          this.errorMessage = error.message;
        });
    }
  }

  public clear() {
    (this.$refs.form as any).reset();
  }
}
