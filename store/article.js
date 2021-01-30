export const state = () => ({
  articles: [
    {
      _id: 1,
      firstName: "nom test",
      lastName: "prenom test",
      dateAdded: "data ajout test",
      image: "/test.png",
      image2: "/test.png",
      user: {
        _id: 1
      }
    }
  ]
});

export const getters = {};

export const mutations = {
  setConnected(state, status) {
    state.connected = status;
  }
};

export const actions = {
  getArticle({ dispatch, state }, id) {
    return new Promise((resolve, reject) => {
      const article = state.articles.find(article => article._id == id);
      article ? resolve(article) : reject(`There is not article of id ${id}`);
    });
  }
};
