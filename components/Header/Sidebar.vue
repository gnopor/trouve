<template>
  <div class="side-bar">
    <div class="top">
      <img src="/images/profil.png" alt="tayou blaise" />

      <span class="trigger" @click="hideSideNav"> <Close /> </span>
    </div>

    <!-- menu  -->
    <div class="menu">
      <div v-for="(link, index) in links" :key="index">
        <a :href="link.path" target="_blank">
          {{ link.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Close from "mdi-vue/Close.vue";

export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  components: {
    Close,
  },
  methods: {
    hideSideNav() {
      this.$emit("onHide", true);
    },
  },
};
</script>

<style scoped>
/* sidebar  */
.side-bar {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--midtone);
  height: 100vh;
  width: 100vw;
}

/* .top logo and close button */
.side-bar .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  color: white;
}

/* .top .logo  */

.top img {
  height: 70px;
  border-radius: 50%;
}

.top .trigger {
  cursor: pointer;
}

/* menu  */
.side-bar .menu {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}

.menu div {
  border-bottom: 1px solid white;
}

.menu a {
  text-decoration: none;
  display: flex;
  color: white;
  cursor: pointer;
  padding: 20px 0;
}
</style>