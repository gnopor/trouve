<template>
  <div class="complete">
    <div class="container">
      <!-- names  -->
      <div class="names">
        <input v-model="firstName" type="text" placeholder="Nom" />
        <input v-model="lastName" type="text" placeholder="Prenom" />
      </div>

      <!-- numbers  -->
      <div class="numbers">
        <input v-model="number1" type="number" placeholder="Telephone 1" />
        <input v-model="number2" type="number" placeholder="Telephone 2" />
      </div>

      <!-- avatar  -->
      <div class="avatar">
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          ref="file_input"
          @change="newImage"
        />
        <Button @click="addFile">Avatar</Button>
        <div v-if="avatar" ref="preview" class="preview"></div>
      </div>

      <!-- controle -->
      <div class="controle">
        <Button secondary @click="onAction('clear')">Annuler</Button>
        <Button primary @click="onAction('send')">Continuer</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button.vue";
import mixin from "@/static/mixins/default.js";
export default {
  mixins: [mixin],
  components: { Button },
  data() {
    return {
      firstName: "",
      lastName: "",
      number1: "",
      number2: "",
      avatar: "",
    };
  },
  methods: {
    addFile() {
      this.$refs.file_input.click();
    },
    newImage(event) {
      const file = event.target.files[0];
      this.avatar = file;

      const img = document.createElement("img");
      img.title = "Photo de profil";
      img.height = "100";

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        img.src = event.target.result;
        const content = this.$refs.preview;

        if (content.firstChild) content.firstChild.remove();
        content.appendChild(img);
      };
    },
    onAction(action) {
      this.loading = true;

      if (action === "clear") {
        this.firstName = "";
        this.lastName = "";
        this.number1 = "";
        this.number2 = "";
        this.avatar = "";
      } else if (this.formValidation()) {
        const formData = new FormData();
        formData.append("firstName", this.firstName);
        formData.append("lastName", this.lastName);
        formData.append("number", this.number1);
        formData.append("number2", this.number2);
        formData.append(this.avatar.name, this.avatar);

        this.$axios
          .post(`${process.env.baseUrl}/auth/update_profile`, formData)
          .then((res) => {
            const PROFILE_NAME = "app_profile";
            let profile = this.$__setCookie(this, PROFILE_NAME, res.data);
            console.log(profile);

            this.message = "Operation reussie";
            this.loading = false;
          })
          .catch((err) => {
            console.log(`[Error] ${err}`);
            this.error = "Probleme survenu pendant le traitement de la requete";
            this.loading = false;
          });
      } else {
        this.error = "Tout les champs sont obligatoires ...";
        this.loading = false;
      }

      this.loading = false;
    },
    formValidation() {
      return (
        this.firstName &&
        this.lastName &&
        this.number1 &&
        this.number2 &&
        this.avatar
      );
    },
  },
};
</script>

<style scoped>
.complete {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* .container  */
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 60px 40px;
  height: 200px;
  background: var(--light_gray);
}
.container::before {
  content: "";
  position: absolute;
  bottom: -12px;
  left: -12px;
  width: 12px;
  height: 12px;
  border: 3px solid var(--base);
  border-width: 0 0 10px 10px;
}

.container::after {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 30px;
  height: 30px;
  border: 3px solid var(--base);
  border-width: 20px 20px 0 0;
}

/* .avatar  */
.avatar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  height: 100px;
  width: 100%;
}

.avatar input {
  display: none;
}

.avatar .preview {
  max-width: 100px;
  max-height: 100px;
}

/* .controle  */
.controle {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

/* for tablet and smartphone */
@media screen and (max-width: 768px) {
  /* .container  */
  .container {
    width: 250px;
    padding: 90px 20px;
  }

  .container::after {
    top: -30px;
    right: -30px;
  }

  /* .names  */
  .container .names {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  /* .numbers  */
  .container .numbers {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>