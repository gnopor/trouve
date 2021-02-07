<template>
  <div>
    <ArticleForm v-if="article._id" :article="article" @update="update" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import mixin from "@/static/mixins/default";
import ArticleForm from "@/components/UI/ArticleForm";
export default {
  components: { ArticleForm },
  mixins: [mixin],
  data: () => ({
    article: {},
    user: {},
  }),
  async mounted() {
    this.loading = true;
    await this.getArticle(this.$route.params.id)
      .then((res) => {
        this.article = res;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        this.loading = false;
        this.error = err;
      });
    this.loading = false;
  },
  methods: {
    ...mapActions("article", ["getArticle", "updateArticle"]),
    async update(article) {
      this.loading = true;
      article.userId = article.user._id;
      this.user = article.user;
      delete article.user;
      const formData = new FormData();
      for (let [key, value] of Object.entries(article)) {
        formData.append(key, value);
      }

      await this.$axios
        .post(
          `${process.env.baseUrl}/${process.env.backen_app}/updateArticle`,
          formData
        )
        .then((res) => {
          const user = this.user;
          this.updateArticle({ ...res.data, user });
          this.loading = false;
          this.message = "Mise à jour effectuée";
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.error = err;
        });
      this.loading = false;
    },
  },
};
</script>

<style scoped>
</style>