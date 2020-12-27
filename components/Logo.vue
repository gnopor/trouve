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
  border: 1px solid white;
  color: white;
  font-weight: bold;
  padding: 3px;
  width: 30px;
  z-index: 1;
}

.logo::after {
  content: "UVE";
  background: white;
  color: var(--base);
  border: 1px solid var(--base);
  padding: 3px 3px 3px 0;
  z-index: 1;
}
</style>