<template>
  <div class="container">
    home

    <span v-if="$auth.loggedIn">User is authenticated</span>
  </div>
</template>

<script >
import Vue from "vue";

export default {
  mounted() {
    // console.log(this.$auth);
  },
};
</script>

<style>
</style>
