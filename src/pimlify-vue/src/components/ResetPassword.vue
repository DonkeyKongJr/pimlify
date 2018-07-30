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
import ResetPassword from './reset-password-component';
export default ResetPassword;
</script>
<style>
.hints {
  margin-top: 15px;
}
</style>
