<template>
  <div class="navbar">
    <div class="logo">
      <Logo />
    </div>

    <div class="menu">
      <!-- links -->
      <a v-for="(link, index) in links" :key="index" :href="link.path">
        <div class="link">
          <span>{{ link.title }}</span>
        </div>
      </a>

      <!-- avatar  -->
      <Avatar v-if="avatar" class="avatar" :url="profile_url" />
    </div>

    <!-- trigger to show sidebar -->
    <span class="trigger" @click="showSideBar = true">
      <Menu />
    </span>

    <Sidebar v-if="showSideBar" :links="links" @onHide="showSideBar = false" />
  </div>
</template>

<script>
import Menu from "mdi-vue/Menu.vue";
import Logo from "@/components/Logo";
import Sidebar from "@/components/Header/Sidebar";
import Avatar from "@/components/UI/Avatar";

export default {
  components: {
    Sidebar,
    Menu,
    Logo,
    Avatar,
  },
  data() {
    return {
      showSideBar: false,
      links: [
        { title: "home", path: "#", icon: "" },
        { title: "logout", path: "/logout", icon: "" },
        { title: "contact", path: "https://tayoublaise.tk", icon: "" },
      ],
      avatar: "",
    };
  },
  mounted() {
    const PROFILE_NAME = "app_profile";
    let profile = this.$__getCookie(this, PROFILE_NAME);
    if (profile && profile.avatar) this.avatar = profile.avatar;
  },
  computed: {
    profile_url() {
      return `${process.env.baseUrl}/auth/static/${this.avatar}`;
    },
  },
};
</script>

<style scoped>
/* navbar */
.navbar {
  background: var(--base);
  color: var(--dark_gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  height: 60px;
  padding: 0 50px 0 10px;
}

/* menu */
.menu {
  height: 100%;
  display: flex;
  align-items: center;
}

.menu a {
  text-decoration: none;
}

.menu .link {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.menu .link span {
  color: white;
}
.menu .link:hover {
  border-bottom: 4px solid var(--accent);
}

.menu .link:active span {
  color: var(--accent);
}

/* avatar  */
.avatar {
  height: 55px;
  width: 55px;
}

/* trigger  */
.trigger {
  display: none;
}

/* for tablet and smartphone */
@media screen and (max-width: 768px) {
  .trigger {
    display: initial;
    color: white;
    cursor: pointer;
  }
  .menu {
    display: none;
  }
}
</style>