<template>
  <div>
    <ArticleForm
      @add="
        {
        }
      "
    />
  </div>
</template>

<script>
import mixin from "@/static/mixins/default";
import ArticleForm from "@/components/UI/ArticleForm";
export default {
  mixins: [mixin],
  components: { ArticleForm },
};
</script>

<style scoped>
</style>