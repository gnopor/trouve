<template>
  <div class="navbar">
    <div class="profil">
      <img src="/images/profil.png" alt="tayou blaise" />
    </div>

    <div class="menu">
      <nuxt-link v-for="(link, index) in links" :key="index" :to="link.path">
        <div>
          <span>{{ link.title }}</span>
        </div>
      </nuxt-link>
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
import Sidebar from "@/components/Header/Sidebar";

export default {
  components: {
    Sidebar,
    Menu,
  },
  data() {
    return {
      showSideBar: false,
      links: [
        { title: "home", path: "#", icon: "" },
        { title: "about", path: "#about", icon: "" },
        { title: "portfolio", path: "#portfolio", icon: "" },
        { title: "contact", path: "#contact", icon: "" },
      ],
    };
  },
};
</script>

<style scoped>
/* navbar */
.navbar {
  background: var(--midtone);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  height: 60px;
  padding: 0 50px 0 10px;
}

/* profile  */
.profil img {
  height: 70px;
  border-radius: 50%;
}

.profil:hover img {
  position: absolute;
  top: 200px;
  height: 400px;
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
  color: white;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.menu div:hover {
  border-bottom: 4px solid var(--accent);
}

.menu div:active {
  color: var(--accent);
}

/* trigger  */
.navbar .trigger {
  display: none;
}

/* for tablet and smartphone */
@media screen and (max-width: 768px) {
  .navbar .trigger {
    display: initial;
    color: white;
    cursor: pointer;
  }
  .menu {
    display: none;
  }
}
</style>