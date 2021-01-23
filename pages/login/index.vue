<template>
  <div class="login">
    <div class="logo">
      <img src="/logo.png" alt="tayou blaise" />
    </div>

    <!-- form  -->
    <div class="form">
      <input v-model="email" type="text" placeholder="email" />
      <input v-model="password" type="password" placeholder="password" />
      <input
        v-if="!isLoginForm"
        v-model="password2"
        type="password"
        placeholder="Confirm password"
      />

      <Button primary v-if="isLoginForm" @click="login">login</Button>
      <Button primary v-else @click="register">register</Button>
    </div>

    <!-- swith login register  -->
    <div class="switch">
      I want to &MediumSpace;
      <span @click="isLoginForm = !isLoginForm">
        {{ isLoginForm ? "Register" : "Login" }}
      </span>
      .
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button";
export default {
  layout: "login",
  components: { Button },
  data: () => ({
    email: "mayoublaise@gmail.com",
    password: "test",
    password2: "test",
    isLoginForm: true,
  }),
  methods: {
    async login() {
      const data = { email: this.email, password: this.password };
      try {
        await this.$auth.loginWith("local", { data }).then((res) => {
          this.$auth.setUserToken(
            res.data.access_token,
            res.data.refresh_token
          );
          this.$router.push("/middleware");
          // Fetch user profile from the appropriate app
          // this.$axios
          //   .get(`${process.env.baseUrl}/auth/user`)
          //   .then((res) => {
          //     // this.$auth.setUser(user)
          //     // console.log(res.data);
          //   })
          //   .catch((err) => {
          //     console.log("[User Fetching Error] ", err);
          //   });
        });
      } catch (err) {
        console.log(err);
      }
    },
    async register() {
      const data = { email: this.email, password: this.password };
      await this.$axios
        .post(`${process.env.baseUrl}/auth/register`, data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log("[Error] ", err);
        });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 300px;
  margin: auto;
}

/* logo  */
.logo {
  margin: 30px;
}

/* form  */
.form {
  display: flex;
  flex-direction: column;
}

.form > * {
  margin: 10px 0;
}

.form input {
  border: 1px solid var(--dark_gray);
  width: 100%;
}

/* .switch */
.switch {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.switch span {
  color: var(--accent);
  font-weight: bold;
  cursor: pointer;
}
</style>