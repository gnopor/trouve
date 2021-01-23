<template>
  <div class="home">
    <ArticleFilter />

    <!-- .cardList -->
    <div class="cardList">
      <ArticleCard v-for="i in 3" :key="i" />
    </div>
  </div>
</template>

<script >
import ArticleFilter from "~/components/UI/ArticleFilter.vue";
import ArticleCard from "~/components/UI/ArticleCard.vue";
export default {
  components: { ArticleFilter, ArticleCard },
  mounted() {},
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
