
<template>
    <div>Welcome to Pimlify! Select your restaurant and order away!

        <v-btn :to="{name:'restaurant'}">Restaurants</v-btn>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
@Component
export default class Home extends Vue {}
</script>

<style>
</style>
