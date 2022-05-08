export default {
  data: function() {
    return {
      loading: false,
      error: "",
      message: ""
    };
  },
  watch: {
    loading() {
      if (this.loading) this.handleLoading();
    },
    error() {
      if (this.error) this.handleError();
    },
    message() {
      if (this.message) this.handleMessage();
    }
  },
  created: function() {},
  mounted() {},
  methods: {
    handleLoading() {
      const body = document.querySelector("body");

      const div = document.createElement("div");
      div.id = "loading";
      div.style.position = "absolute";
      div.style.top = "50%";
      div.style.left = "50%";
      div.style.fontSize = "20px";
      div.style.fontWeight = "bold";
      div.innerText = "Loading";
      body.appendChild(div);

      setInterval(() => {
        if (this.loading) {
          div.innerText = "Loading";

          setTimeout(() => {
            div.innerText = "Loading.";
          }, 500);

          setTimeout(() => {
            div.innerText = "Loading..";
          }, 1000);

          setTimeout(() => {
            div.innerText = "Loading...";
          }, 1500);
        } else {
          div.remove();
        }
      }, 2000);
    },
    handleMessage() {
      alert(`[Notification] ${this.message}`);
      this.message = "";
    },
    handleError() {
      if (
        this.error &&
        this.error.response &&
        this.error.response.status == 401
      )
        return this.$router.push("/logout");
      alert(`[Erreur] ${this.error}`);
      this.error = "";
    }
  }
};
