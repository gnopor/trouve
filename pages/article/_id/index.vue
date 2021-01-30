<template>
  <div class="article-view-container grid">
    <!-- current-user-article -->
    <div class="current-user-artcle">
      Yours
      <client-only>
        <mdicon name="check" />
      </client-only>
    </div>

    <!-- images -->
    <div class="images">
      <img :src="article.image" alt="image1" />
      <img :src="article.image2" alt="image2" />
    </div>

    <!-- infos container-->
    <div class="infos-container">
      <div class="infos">
        <div>
          <span>Nom: </span> <span>{{ article.firstName }}</span>
        </div>
        <div>
          <span>Prenom: </span> <span>{{ article.lastName }}</span>
        </div>
        <div>
          <span>Date d'ajout: </span> <span>{{ article.dateAdded }}</span>
        </div>
      </div>

      <div v-if="article.user" class="numbers">
        <span>Contacter le detenteur</span>
        <span>{{ article.user.number }}</span>
        <span>{{ article.user.number2 }}</span>
      </div>

      <div class="actions">
        <Button secondary>Delete</Button>
        <Button primary>Update</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "@/components/UI/Button";
export default {
  components: { Button },
  data: () => ({
    article: {},
  }),

  mounted() {
    this.getArticle(this.$route.params.id)
      .then((res) => {
        this.article = res;
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  },
  methods: {
    ...mapActions("article", ["getArticle"]),
  },
};
</script>

<style scoped>
/* article-view-container */
.article-view-container {
  position: relative;
}
.current-user-artcle {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: var(--accent);
  color: white;
  font-weight: bold;
  /* ellipse(radiusX radiusY at posX posY) */
  clip-path: ellipse(70px 70px at 90% 20%);
  height: 100px;
  width: 100px;
}

/* .images */
.images {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1/7;
  height: 100vh;
}

.images img {
  height: 300px;
}

/* .infos-container */
.infos-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 7/13;
  height: 100vh;
}

/* .infos  */
.infos {
  display: flex;
  flex-direction: column;
  margin: 50px 0;
}

.infos span:nth-child(1) {
  font-size: 2em;
  color: var(--accent);
}

.infos span:nth-child(2) {
  font-size: 2em;
  font-weight: bold;
}

/* .numbers */
.numbers {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.numbers span:nth-child(1) {
  font-size: 2em;
  color: var(--accent);
  padding: 10px;
}

.numbers span {
  font-weight: bold;
}

/* .actions */
.actions {
  display: flex;
  justify-content: space-evenly;
  margin: 50px;
  width: 100%;
}

/* for tablet and smartphone */
@media screen and (max-width: 768px) {
  /* .images */
  .images {
    grid-column: 1/13;
    margin: 50px;
    height: fit-content;
  }
  .images img {
    height: 250px;
  }
  /* .infos-container */
  .infos-container {
    grid-column: 1/13;
    height: fit-content;
  }

  .infos {
    margin: 0;
  }

  .infos span:nth-child(1) {
    font-size: 1em;
  }

  .infos span:nth-child(2) {
    font-size: 1em;
  }
}
</style>