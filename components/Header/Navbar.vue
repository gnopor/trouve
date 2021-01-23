<template>
  <div class="navbar">
    <div class="logo">
      <Logo />
    </div>

    <div class="menu">
      <!-- links -->
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.path"
        target="_blank"
      >
        <div class="link">
          <span>{{ link.title }}</span>
        </div>
      </a>

      <!-- avatar  -->
      <Avatar v-if="avatar" class="avatar" :url="profile_url" />
    </div>

    <!-- trigger to show sidebar -->
    <span class="trigger" @click="showSideBar = true">
      <mdicon name="menu" />
    </span>

    <Sidebar v-if="showSideBar" :links="links" @onHide="showSideBar = false" />
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Sidebar from "@/components/Header/Sidebar";
import Avatar from "@/components/UI/Avatar";

export default {
  components: {
    Sidebar,
    Logo,
    Avatar,
  },
  data() {
    return {
      showSideBar: false,
      links: [
        { title: "home", path: "/", icon: "" },
        { title: "add", path: "/add_article", icon: "" },
        { title: "my article", path: "my_article", icon: "" },
        { title: "contact", path: "https://tayoublaise.tk", icon: "" },
        { title: "logout", path: "/logout", icon: "" },
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
  height: 100%;
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
  text-transform: capitalize;
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