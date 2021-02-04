<template>
  <div class="article-form">
    <!-- title  -->
    <div class="title">
      <span>{{ article ? "Update Article" : "Add Article" }}</span>
    </div>
    <!-- form  -->
    <div class="form">
      <div>
        <input v-model="current.firstName" type="text" placeholder="Nom" />
      </div>

      <div>
        <input v-model="current.lastName" type="text" placeholder="Prenom" />
      </div>

      <div>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          ref="image1"
          @change="newImage"
        />
        <Button icon="cameraPlus" @click="addFile('front')"> Front </Button>
        <div ref="preview1"></div>
      </div>

      <div>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          ref="image2"
          @change="newImage"
        />
        <Button icon="cameraPlus" @click="addFile('back')"> Back </Button>
        <div ref="preview2"></div>
      </div>

      <div class="actions">
        <Button secondary icon="cancel" @click="current = {}"> Cancel </Button>
        <Button v-if="!article" primary icon="plus" @click="send"> Add </Button>
        <Button v-else primary icon="update"> Update </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import mixin from "@/static/mixins/default";
import Button from "@/components/UI/Button";
export default {
  mixins: [mixin],
  props: {
    article: {
      type: Object,
    },
  },
  components: { Button },
  data: () => ({
    current: {},
    imageSelector: "",
  }),
  methods: {
    addFile(target) {
      // console.log(arguments[0]);
      if (target == "front") {
        this.$refs.image1.click();
        this.imageSelector = "image1";
      } else {
        this.$refs.image2.click();
        this.imageSelector = "image2";
      }
    },
    newImage(event) {
      const image = event.target.files[0];
      let preview;
      let title;
      if (this.imageSelector == "image1") {
        this.current.image = image;
        preview = this.$refs.preview1;
        title = "Front image";
      } else {
        this.current.image2 = image;
        preview = this.$refs.preview2;
        title = "Back image";
      }

      const img = document.createElement("img");
      img.title = title;
      img.height = "100";

      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (event) => {
        img.src = event.target.result;

        if (preview.firstChild) preview.firstChild.remove();
        preview.appendChild(img);
      };
    },
    send() {
      if (!this.isFormValid())
        return (this.message = "Remplissez tout les champs");

      this.current._id = uuidv4();
      this.$emit("add", this.current);
      this.current = {};
    },
    isFormValid() {
      return (
        this.current.firstName &&
        this.current.lastName &&
        this.current.image &&
        this.current.image2
      );
    },
  },
};
</script>

<style scoped>
.article-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 10vh);
}

/* .title */
.title {
  margin: 50px;
  align-self: flex-start;
}

.title span {
  font-size: 5em;
  -webkit-text-stroke: 2px;
  -webkit-text-stroke-color: var(--base);
  -webkit-text-fill-color: transparent;
}

/* .form  */
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 100vw;
}

.form::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid var(--base);
  border-width: 0 0 20px 20px;
  transform: translate(-30px, 30px);
}

.form::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  width: 30px;
  border: 1px solid var(--base);
  border-width: 30px 30px 0 0;
  transform: translate(80px, -60px);
}

/* form input  */
.form div {
  margin: 10px 0;
}

.form div input[type="text"] {
  width: 100%;
}

.form div input[type="file"] {
  display: none;
}

/* .actions */
.actions {
  display: flex;
  justify-content: space-evenly;
}
</style>