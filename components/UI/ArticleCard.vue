<template>
  <div class="card-container">
    <!-- image-container -->
    <div class="image-container">
      <img :src="article.image" alt="image1" />
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
        <span>Date ajout: </span><span>{{ article.dateAdded }}</span>
      </div>

      <!-- current user  -->
      <span v-if="article.userId == 1" class="current_user">
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
  height: 100%;
  width: 200px;
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
  padding: 2px 5px;
}
</style>