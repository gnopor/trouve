<template>
  <div class="article-view-container grid">
    <!-- images -->
    <div class="images">
      <img :src="article.image" alt="image1" />
      <img :src="article.image2" alt="image2" />
    </div>

    <!-- infos container-->
    <div class="infos-container">
      <div class="infos">{{ article }}</div>
      <div class="numbers"></div>
      <div class="actions"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    article: {},
  }),

  mounted() {
    this.getArticle(this.$route.params.id)
      .then((res) => {
        this.article = res;
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  },
  methods: {
    ...mapActions("article", ["getArticle"]),
  },
};
</script>

<style scoped>
</style>