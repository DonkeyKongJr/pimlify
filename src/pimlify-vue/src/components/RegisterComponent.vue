<template>
<div style='width:50%'>
 <v-form ref="form" v-model="valid">
    <v-text-field
      v-model="user.firstname"
      :rules="nameRules"
      label="First name"
      required
    ></v-text-field>
    <v-text-field
      v-model="user.lastname"
      :rules="nameRules"
      label="Last name"
      required
    ></v-text-field>
    <v-text-field
      v-model="user.email"
      :rules="emailRules"
      label="E-Mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="user.password"
      :type="'password'"
      label="Password"
      required
    ></v-text-field>
      <v-btn
      :disabled="!valid"
      @click="submit"
    >
      Register
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  <v-alert
      :value="successAlert"
      type="success"
      transition="scale-transition"
    >
      Register successful.
    </v-alert>
       <v-alert
      :value="errorAlert"
      type="error"
    >
      Error in Register Process. Please try again or contact administrator. <br /> 
      Detailed Message: {{errorMessage}}
    </v-alert>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { User } from '../store';
import firebase from 'firebase';
import { db } from '../main';

@Component
export default class RegisterComponent extends Vue {
  public user: User = new User();
  public errorAlert: boolean = false;
  public successAlert: boolean = false;
  public errorMessage: string = '';

  public emailRules = [
    (v: any) => !!v || 'E-mail is required',
    (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'
  ];

  public nameRules = [
    (v: any) => !!v || 'Name is required',
    (v: any) => (v && v.length > 3) || 'Name must be more than 3 characters'
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
          this.errorAlert = false;
        })
        .catch(error => {
          this.errorMessage = error.message;
          this.successAlert = false;
          this.errorAlert = true;
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

    db
      .collection('user')
      .doc(firebaseUser.uid)
      .set({
        firstname: this.user.firstname,
        lastname: this.user.lastname
      });
  }
}
</script>

<style>
</style>
