<template>
  <div class="app">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Header/Navbar";

export default {};
</script>

<style>
.app {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
