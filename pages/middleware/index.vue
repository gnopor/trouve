<template>
  <div>Merci de patienter quelques instants...</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const PROFILE_NAME = "app_profile";
    const profile = this.$__getCookie(PROFILE_NAME);
  },
};
</script>

<style scoped>
</style>