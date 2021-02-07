<template>
  <div class="filter-container">
    <input v-model="filter" type="text" placeholder="Search..." />
  </div>
</template>

<script>
export default {
  name: "ArticleFilter",
  data: () => ({
    filter: "",
  }),
  watch: {
    filter() {
      this.$emit("change", this.filter);
    },
  },
};
</script>

<style scoped>
.filter-container {
  position: relative;
  padding: 0 100px;
  border: 1px solid var(--base);
  /* z-index: -4; */
}

/* input  */

.filter-container input {
  border: 1px solid var(--base);
  width: 300px;
}

.filter-container::before {
  content: "Filter";
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  height: 45px;
  width: 100px;
  background: var(--base);
  /* border: 1px solid var(--base); */
}

/* for tablet and smartphone */
@media screen and (max-width: 768px) {
  /* input  */

  .filter-container input {
    border: 1px solid var(--base);
    width: 275px;
  }
}
</style>