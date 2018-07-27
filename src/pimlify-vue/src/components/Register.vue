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
      :value="this.errorMessage"
      type="error"
    >
      Error in Register Process. Please try again or contact administrator. <br /> 
      Detailed Message: {{errorMessage}}
    </v-alert>
</div>
</template>

<script lang="ts">
import Register from './register';
export default Register;
</script>

<style>
</style>
