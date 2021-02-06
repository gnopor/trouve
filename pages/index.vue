<template>
  <div class="home">
    <ArticleFilter />

    <!-- .cardList -->
    <div class="cardList">
      <ArticleCard v-for="i in 20" :key="i" :article="article" />
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
    article: {
      firstName: "nom test",
      lastName: "prenom test",
      dateAdded: "data ajout test",
      image: "/test.png",
      userId: 1,
    },
  }),
  mounted() {
    this.loading = true;
    if (!(this.articles.length > 0)) {
      this.$axios
        .get("/getArticles")
        .then((res) => {
          this.setArticles(res.data);
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.error = err;
        });
    }
    this.loading = false;
  },
  methods: {
    ...mapActions("article", ["setArticles"]),
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
