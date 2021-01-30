<template>
  <div>
    <span> There is no the page you are looking for</span>
    <client-only>
      <mdicon name="alertCircleOutline" size="100" />
    </client-only>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

div span {
  font-size: 3em;
}
</style>