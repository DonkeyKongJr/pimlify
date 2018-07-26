<template>
<div style='width:50%'>
  <div v-if="!isUserLoggedIn">
 <v-form ref="form" v-model="valid" >
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
      @click="login"
    >
      Login
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  <div class="hints">Dont't have an account? Create one <router-link :to="'register'">here.</router-link></div>
  <div>Forgot your password? Reset <router-link :to="'reset-password'">here.</router-link></div>
  </div>
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
    <div v-if="isUserLoggedIn && userInfo && userInfo.firstname">
      <h2>Hello {{userInfo.firstname}}</h2><br/>
      <v-btn  @click="logout">Logout</v-btn>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { User } from '../store';
import firebase from 'firebase';
import { db } from '../main';
import store from '../store';

@Component
export default class LoginComponent extends Vue {
  public user: User = new User();
  public successAlert: boolean = false;
  public errorMessage: string = '';
  public isUserLoggedIn: boolean = false;

  constructor() {
    super();
    this.getUserAuthState();
  }

  public emailRules = [(v: any) => !!v || 'E-mail is required', (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'];

  public passwordRules = [(v: any) => !!v || 'Password is required'];

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
</script>
<style>
.hints {
  margin-top: 15px;
}
</style>
