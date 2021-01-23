<template>
  <div>Merci de patienter quelques instants...</div>
</template>

<script>
import mixin from "@/static/mixins/default.js";

export default {
  mixins: [mixin],
  data() {
    return {};
  },
  async mounted() {
    this.loading = true;
    const PROFILE_NAME = "app_profile";
    let profile = this.$__getCookie(this, PROFILE_NAME);

    if (!profile) {
      // we don't use post here because nuxt auth will automaticaly send
      // our access token to the server and using flask-jwt we will get the user id
      await this.$axios
        .get(`${process.env.baseUrl}/auth/user`)
        .then((res) => {
          profile = res.data;
          const completed = this.isProfileCompleted(profile);
          completed && this.$__setCookie(this, PROFILE_NAME, profile);
          this.$router.push("/");

          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    } else {
      const completed = await this.isProfileCompleted(profile);
      debugger;
      this.$router.push("/");

      this.loading = false;
    }
  },
  methods: {
    isProfileCompleted(profile) {
      const condition = profile && profile.firstName && profile.lastName;

      if (condition) return true;
      this.$router.push("/complet_profile");
    },
  },
};
</script>

<style scoped>
</style>