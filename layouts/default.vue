<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Header/Navbar";
import mixin from "@/static/mixins/default.js";

export default {
  mixins: [mixin],
};
</script>

<style>
</style>
