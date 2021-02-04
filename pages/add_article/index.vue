<template>
  <div>
    <ArticleForm @add="addNewArticle" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import mixin from "@/static/mixins/default";
import ArticleForm from "@/components/UI/ArticleForm";
export default {
  mixins: [mixin],
  components: { ArticleForm },
  data: () => ({
    profile: {},
  }),
  mounted() {
    const PROFILE_NAME = "app_profile";
    this.profile = this.$__getCookie(this, PROFILE_NAME);
  },
  methods: {
    ...mapActions("article", ["addArticle"]),
    async addNewArticle(data) {
      this.loading = true;
      const formData = new FormData();
      for (let [key, value] of Object.entries(data)) {
        formData.append(key, value);
      }

      await this.$axios
        .post("/addArticle", formData)
        .then((res) => {
          const data = res.data;
          delete data.userId;
          const { _id, number, number2 } = this.profile;
          const user = { _id, number, number2 };
          const article = { ...data, user };
          this.addArticle(article);
          this.loading = false;
          this.message = "Operation reussie";
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.error = "Problem lors de l'ajout";
        });

      await console.log("my article state", this.$store.state);
    },
  },
};
</script>

<style scoped>
</style>