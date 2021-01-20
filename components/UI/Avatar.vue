<template>
  <img :src="url" alt="avatar" />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
}
</style>