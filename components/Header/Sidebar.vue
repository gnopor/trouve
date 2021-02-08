<template>
  <div class="side-bar">
    <div class="top">
      <Logo />

      <span class="trigger" @click="hideSidebar">
        <client-only>
          <mdicon name="close" />
        </client-only>
      </span>
    </div>

    <!-- menu  -->
    <div class="menu" width="42" @click="hideSidebar">
      <!-- avatar  -->
      <div v-if="avatar && $auth.loggedIn" class="avatar">
        <Avatar :url="profile_url" />
      </div>

      <!-- links -->
      <div v-for="(link, index) in links" :key="index">
        <a
          v-if="link.path.includes('tayoublaise')"
          :href="link.path"
          target="_blank"
        >
          <client-only>
            <mdicon v-if="link.icon" :name="link.icon" />
          </client-only>
          {{ link.title }}
        </a>

        <nuxt-link v-else :to="link.path">
          <client-only>
            <mdicon v-if="link.icon" :name="link.icon" />
          </client-only>
          {{ link.title }}
        </nuxt-link>
      </div>

      <!-- auth link -->
      <div class="link">
        <nuxt-link v-if="$auth.loggedIn" to="/logout">
          <client-only>
            <mdicon name="logout" />
          </client-only>

          <span>Logout</span>
        </nuxt-link>

        <nuxt-link v-else to="/login">
          <client-only>
            <mdicon name="login" />
          </client-only>

          <span>Login</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
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
    hideSidebar() {
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
  text-transform: capitalize;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 20px 0;
}

.menu svg {
  margin: 0 10px;
}

/* .avatar */
.avatar {
  margin: auto;
}
</style>