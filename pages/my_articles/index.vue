<template>
  <div class="my_articles">
    <ArticleList v-if="userId" :userId="userId" />
  </div>
</template>

<script >
import ArticleList from "@/components/UI/ArticleList";
export default {
  components: { ArticleList },
  data: () => ({
    userId: "",
  }),
  mounted() {
    const PROFILE_NAME = "app_profile";
    let profile = this.$__getCookie(this, PROFILE_NAME);
    this.userId = profile._id;
  },
};
</script>

<style scoped>
