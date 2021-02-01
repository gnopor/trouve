<template>
  <div>
    <ArticleForm
      :article="{}"
      @update="
        {
        }
      "
    />
  </div>
</template>

<script>
import ArticleForm from "@/components/UI/ArticleForm";
export default {
  components: { ArticleForm },
};
</script>

<style scoped>
</style>