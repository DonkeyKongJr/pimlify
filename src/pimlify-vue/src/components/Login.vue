<template>
<div style='width:50%'>
  <div v-if="!isUserLoggedIn">
 <v-form ref="form" v-model="valid" >
    <v-text-field class="email"
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
      type="submit"
    >
      Login
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  <div class="hints">Don't have an account? Create one <router-link :to="'register'">here.</router-link></div>
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
import Login from './login-component';
export default Login;
</script>
<style>
.hints {
  margin-top: 15px;
}
</style>
