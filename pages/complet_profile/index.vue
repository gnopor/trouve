<template>
  <div class="complete">
    <div class="container">
      <!-- names  -->
      <div class="names">
        <input v-model="fistName" type="text" placeholder="Nom" />
        <input v-model="lastName" type="text" placeholder="Prenom" />
      </div>

      <!-- numbers  -->
      <div class="numbers">
        <input v-model="number1" type="number" placeholder="Telephone 1" />
        <input v-model="number2" type="number" placeholder="Telephone 2" />
      </div>

      <!-- avatar  -->
      <div class="avatar">
        <input type="file" name="" />
        <button>Avatar</button>
        <img v-if="avatar" src="" alt="avatar" class="preview" />
      </div>

      <!-- controle -->
      <div class="controle">
        <button>Annuler</button>
        <button>Continuer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      number1: "",
      number2: "",
      avatar: "",
    };
  },
};
</script>

<style scoped>
.complete {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* .container  */
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
  top: -20px;
  right: -20px;
  width: 30px;
  height: 30px;
  border: 3px solid var(--base);
  border-width: 20px 20px 0 0;
}

.container button {
  border-radius: 0;
  padding: 10px;
  cursor: pointer;
}

/* input  */
input {
  position: relative;
  margin: 5px;
  height: 2em;
}

/* .avatar  */
.avatar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  width: 100%;
}

.avatar input {
  display: none;
}

.avatar button {
  color: var(--dark-gray);
  background: transparent;
}

/* .controle  */
.controle {
}

.controle button {
  width: 100px;
}

.controle button:nth-child(1) {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
}

.controle button:nth-child(2) {
  background: var(--accent);

  color: var(--light_gray);
  border: none;
  font-weight: bold;
}
</style>