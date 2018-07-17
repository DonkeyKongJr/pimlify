<template>
    <div>{{message}}</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue{
    public get message(){
        return this.$store.state.message;
    }
}
</script>

<style>

</style>
