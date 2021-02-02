<template>
  <div>
    <ArticleForm @add="addNewArticle" />
  </div>
</template>

<script>
import mixin from "@/static/mixins/default";
import ArticleForm from "@/components/UI/ArticleForm";
export default {
  mixins: [mixin],
  components: { ArticleForm },
  methods: {
    async addNewArticle(data) {
      this.loading = true;
      const formData = new FormData();
      for (let [key, value] of Object.entries(data)) {
        formData.append(key, value);
      }

      await this.$axios
        .post("/addArticle", formData)
        .then((res) => {
          console.log(res.data);
          this.loading = false;
          this.message = "Operation reussie";
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.error = "Problem lors de l'ajout";
        });
    },
  },
};
</script>

<style scoped>
</style>