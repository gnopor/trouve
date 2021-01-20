<template>
  <div class="logout">
    <span>See you soon</span>
  </div>
</template>

<script>
import mixin from "@/static/mixins/default";
export default {
  mixins: [mixin],
  async mounted() {
    this.loading = true;
    await this.$auth
      .logout()
      .then((res) => {
        this.message = "See you soon...";
        this.loading = false;
        this.$router.push("/login");
      })
      .catch((err) => {
        this.error = "Error during logout process";
        this.loading = false;
      });

    this.loading = false;
  },
};
</script>

<style scoped>
</style>