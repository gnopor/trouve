<template>
  <div class="card-container" @click="$emit('click')">
    <!-- image-container -->
    <div class="image-container">
      <img :src="imageUrl" alt="image1" />
    </div>

    <!-- info-container  -->
    <div class="info-container">
      <div>
        <span>Nom: </span> <span>{{ article.firstName }}</span>
      </div>
      <div>
        <span>Prenom: </span> <span>{{ article.lastName }}</span>
      </div>
      <div>
        <span>Date ajout: </span><span>{{ formatedDate }}</span>
      </div>

      <!-- current user  -->
      <span v-if="article.user._id == currentUserId" class="current_user">
        Yours
        <client-only>
          <mdicon name="check" />
        </client-only>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
    },
  },
  data: () => ({
    currentUserId: "",
  }),
  mounted() {
    const PROFILE_NAME = "app_profile";
    let { _id } = this.$__getCookie(this, PROFILE_NAME);
    this.currentUserId = _id;
  },
  computed: {
    imageUrl() {
      return `${process.env.baseUrl}/${process.env.backen_app}/static/${this.article.image}`;
    },
    formatedDate() {
      return this.$__formatDate(this.article.dateAdd);
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  border: 1px solid var(--base);
  border-radius: 10px;
  cursor: pointer;
  margin: 5px 0;
  width: 400px;
}

/* .image-container */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  width: 200px;
}

.image-container img {
  border-radius: 10px 0 0 10px;
  height: 100%;
  width: 200px;
  transition: 0.5s ease;
}

.card-container:hover .image-container img {
  transform: scale(1.2);
}

/* .info-container */
.info-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 5px;
  height: 100%;
  width: 195px;
}

.info-container div {
  margin: 2px;
}

.info-container div span:nth-child(1) {
  color: var(--accent);
}

.info-container div span:nth-child(2) {
  font-weight: bold;
}

/* .current_user  */
.info-container .current_user {
  position: absolute;
  bottom: 0;
  right: 0px;
  background: var(--accent);
  color: white;
  font-size: 0.75em;
  font-weight: bold;
  border-radius: 20px 0 10px 0;
  padding: 1px 5px;
}
</style>