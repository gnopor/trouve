<template>
  <div class="article-form">
    <!-- title  -->
    <div class="title">
      <span>{{ article ? "Update Article" : "Add Article" }}</span>
    </div>
    <!-- form  -->
    <div class="form">
      <div>
        <input v-model="current.firstName" type="text" placeholder="Nom" />
      </div>

      <div>
        <input v-model="current.lastName" type="text" placeholder="Prenom" />
      </div>

      <div>
        <input type="file" accept="images/*" ref="image1" />
        <Button icon="cameraPlus" @click="refs.image1.click()"> Front </Button>
      </div>

      <div>
        <input type="file" accept="images/*" ref="image2" />
        <Button icon="cameraPlus"> Back </Button>
      </div>

      <div class="actions">
        <Button secondary icon="cancel" @click="current = {}"> Cancel </Button>
        <Button v-if="!article" primary icon="plus"> Add </Button>
        <Button v-else primary icon="update"> Update </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button";
export default {
  props: {
    article: {
      type: Object,
    },
  },
  components: { Button },
  data: () => ({
    current: {},
  }),
};
</script>

<style scoped>
.article-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 10vh);
}

/* .title */
.title {
  margin: 50px;
  align-self: flex-start;
}

.title span {
  font-size: 5em;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: var(--base);
  -webkit-text-fill-color: transparent;
}

/* .form  */
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 100vw;
}

.form::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid var(--base);
  border-width: 0 0 20px 20px;
  transform: translate(-30px, 30px);
}

.form::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  width: 30px;
  border: 1px solid var(--base);
  border-width: 30px 30px 0 0;
  transform: translate(80px, -60px);
}

/* form input  */
.form div {
  margin: 10px 0;
}

.form div input[type="text"] {
  width: 100%;
}

.form div input[type="file"] {
  display: none;
}

/* .actions */
.actions {
  display: flex;
  justify-content: space-evenly;
}
</style>