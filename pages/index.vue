<template>
  <div class="home">
    <ArticleList />
  </div>
</template>

<script >
import ArticleList from "@/components/UI/ArticleList";
export default {
  auth: false,
  components: { ArticleList },
};
</script>

<style scoped>
