<template>
  <div>
    some article: {{ this.$route.params.id }}

    {{ article }}
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
    ...mapState({ articles: "article/articles" }),
  },
  mounted() {
    // console.log("maped state ", mapState(["article/articles"]));
    this.article_id = this.$route.params.id;
  },
};
</script>

<style scoped>
</style>