<template>
<div style='width:50%'>
 <v-form ref="form" v-model="valid">
    <v-text-field
      v-model="user.email"
      :rules="emailRules"
      label="E-Mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="user.password"
      :rules="passwordRules"
      :type="'password'"
      label="Password"
      required
    ></v-text-field>
      <v-btn
      :disabled="!valid"
      @click="submit"
    >
      Login
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  <v-alert
      :value="successAlert"
      type="success"
      transition="scale-transition"
    >
      Login successful.
    </v-alert>
       <v-alert
      :value="this.errorMessage"
      type="error"
    >
      Error in Login Process. Please try again or contact administrator.<br /> 
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
export default class LoginComponent extends Vue {
  public user: User = new User();
  public successAlert: boolean = false;
  public errorMessage: string = '';

  public emailRules = [
    (v: any) => !!v || 'E-mail is required',
    (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'
  ];

    public passwordRules = [
    (v: any) => !!v || 'Password is required'
  ];

  public submit() {
    if ((this.$refs.form as any).validate()) {
      console.log('valid input');
         firebase
      .auth()
      .signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(data => {
        console.log(data.user);
         this.errorMessage = '';
      })
      .catch(error => {
        this.errorMessage = error.message;
      });
    }
  }

  public clear() {
    (this.$refs.form as any).reset();
  }
}
</script>
<style>
</style>
