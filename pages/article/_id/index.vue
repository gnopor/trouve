<template>
  <div>
    some article: {{ this.$route.params.id }}

    <span v-if="articles">{{ articles }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    article_id: "",
  }),
  watch: {
    articles() {
      console.log("articles ", this.articles);
    },
  },
  computed: {
    ...mapState({
      articles: (state) => state.article.articles,
    }),
  },
  mounted() {
    // console.log("maped state ", mapState(["article/articles"]));
    this.article_id = this.$route.params.id;
  },
};
</script>

<style scoped>
</style>