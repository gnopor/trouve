<template>
  <div class="side-bar">
    <div class="top">
      <Logo />

      <span class="trigger" @click="hideSideNav"> <Close /> </span>
    </div>

    <!-- menu  -->
    <div class="menu">
      <!-- avatar  -->
      <div v-if="avatar" class="avatar">
        <Avatar :url="profile_url" />
      </div>
      <!-- links -->
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
import Logo from "@/components/Logo";
import Avatar from "@/components/UI/Avatar";

export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  components: {
    Close,
    Logo,
    Avatar,
  },
  data() {
    return {
      avatar: "",
    };
  },
  mounted() {
    const PROFILE_NAME = "app_profile";
    let profile = this.$__getCookie(this, PROFILE_NAME);
    if (profile && profile.avatar) this.avatar = profile.avatar;
  },
  methods: {
    hideSideNav() {
      this.$emit("onHide", true);
    },
  },
  computed: {
    profile_url() {
      return `${process.env.baseUrl}/auth/static/${this.avatar}`;
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
  background: var(--base);
  height: 100vh;
  width: 100vw;
  z-index: 10;
}

/* .top logo and close button */
.side-bar .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

/* .top .logo  */

.top .trigger span svg {
  color: white;
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

/* .avatar */
.avatar {
  margin: auto;
}
</style>