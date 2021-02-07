<template>
  <div class="home">
    <ArticleFilter @change="applyFilter" />

    <!-- .cardList -->
    <div class="cardList" v-if="articles.length">
      <ArticleCard
        v-for="(article, i) in allArticles"
        :key="i"
        :article="article"
        @click="$router.push(`/article/${article._id}`)"
      />
    </div>
  </div>
</template>

<script >
import { mapState, mapActions } from "vuex";
import mixin from "@/static/mixins/default";
import ArticleFilter from "~/components/UI/ArticleFilter.vue";
import ArticleCard from "~/components/UI/ArticleCard.vue";
export default {
  components: { ArticleFilter, ArticleCard },
  mixins: [mixin],
  data: () => ({
    allArticles: [],
  }),
  async mounted() {
    this.loading = true;

    if (!(this.articles.length > 0)) {
      await this.$axios
        .get("/getArticles")
        .then((res) => {
          this.setArticles(res.data);
          this.allArticles = res.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.error = err;
        });
    }
    this.allArticles = this.articles;
    this.loading = false;
  },
  methods: {
    ...mapActions("article", ["setArticles"]),
    applyFilter(string) {
      this.allArticles = this.articles.filter((article) => {
        return (
          article.firstName.includes(string) ||
          article.lastName.includes(string)
        );
      });
    },
  },
  computed: {
    ...mapState("article", ["articles"]),
  },
};
</script>

<style scoped>
/* .home  */

.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* .cardList  */
.cardList {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 300px;
  height: 100vh;
}
</style>
