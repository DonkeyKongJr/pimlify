<template>
<div style='width:50%'>
 <v-form ref="form" v-model="valid" >
    <v-text-field
      v-model="user.email"
      :rules="emailRules"
      label="E-Mail"
      required
    ></v-text-field>
      <v-btn
      :disabled="!valid"
      @click="reset"
    >
      Reset
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  <v-alert
      :value="successAlert"
      type="success"
      transition="scale-transition"
    >
      Reset Request successful.
    </v-alert>
       <v-alert
      :value="this.errorMessage"
      type="error"
    >
      Error in Reset Process. Please try again or contact administrator.<br /> 
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
import store from '../store';

@Component
export default class ResetPassword extends Vue {
  public user: User = new User();
  public successAlert: boolean = false;
  public errorMessage: string = '';

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
</script>
<style>
.hints {
  margin-top: 15px;
}
</style>
