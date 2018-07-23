<template>
 <v-form ref="form" style='width:50%' v-model="valid">
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
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import value from '*.json';
import { User } from '../store';

@Component
export default class RegisterComponent extends Vue {
  public user: User = new User();

  public emailRules = [
    (v: any) => !!v || 'E-mail is required',
    (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'
  ];

  public nameRules = [
    (v: any) => !!v || 'Name is required',
    (v: any) => (v && v.length > 3) || 'Name must be more than 3 characters'
  ];

  public submit() {
    console.log('Submit was clicked');

    if ((this.$refs.form as any).validate()) {
      console.log('Validated' + this.user.email);
    }
  }

  public clear() {
    console.log('Clear clicked');
    (this.$refs.form as any).reset();
  }
}
</script>

<style>
</style>
