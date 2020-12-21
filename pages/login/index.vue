<template>
  <div class="login">
    <div>
      i want to
      <button @click="isLoginForm = !isLoginForm">
        {{ isLoginForm ? "login" : "register" }}
      </button>
    </div>
    <input v-model="email" type="text" placeholder="email" />
    <input v-model="password" type="text" placeholder="password" />
    <input
      v-if="!isLoginForm"
      v-model="password2"
      type="text"
      placeholder="Confirm password"
    />

    <button v-if="isLoginForm" @click="login">login</button>
    <button v-else @click="register">register</button>
  </div>
</template>

<script>
export default {
  layout: "login",
  data: () => ({
    email: "mayoublaise@gmail.com",
    password: "test",
    password2: "",
    isLoginForm: true,
  }),
  methods: {
    async login() {
      const login = { email: this.email, password: this.password };
      console.log(login);
      try {
        await this.$auth.loginWith("local", { data: login }).then((res) => {
          console.log(data);
          this.$auth.setUserToken(
            res.data.access_token,
            res.data.refresh_token
          );
          // TODO: fetch user profile from the appropriate app
          // this.$auth.setUser(user)
        });
      } catch (err) {
        console.log(err);
      }
    },
    register() {},
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 300px;
}
</style>