<template>
  <div class="navbar">
    <div class="logo">
      <Logo />
    </div>

    <div class="menu">
      <a v-for="(link, index) in links" :key="index" :href="link.path">
        <div>
          <span>{{ link.title }}</span>
        </div>
      </a>
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

export default {
  components: {
    Sidebar,
    Menu,
    Logo,
  },
  data() {
    return {
      showSideBar: false,
      links: [
        { title: "home", path: "#", icon: "" },
        { title: "logout", path: "#", icon: "" },
        { title: "contact", path: "https://tayoublaise.tk", icon: "" },
      ],
    };
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
}

.menu a {
  text-decoration: none;
}

.menu div {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.menu div span {
  color: white;
}
.menu div:hover {
  border-bottom: 4px solid var(--accent);
}

.menu div:active span {
  color: var(--accent);
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