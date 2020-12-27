<template>
  <div>
    <div class="logo">TRO</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  background: var(--base);
  color: white;
  font-weight: bold;
  padding: 3px;
  width: 30px;
}

.logo::after {
  content: "UVE";
  color: var(--base);
}
</style>