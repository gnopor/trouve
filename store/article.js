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
        _id: 1,
        number: "658758965",
        number2: "63524521"
      }
    }
  ]
});

export const getters = {};

export const mutations = {
  addArticle(state, article) {
    state.articles = [...state.articles, article];
  }
};

export const actions = {
  getArticle({ state }, id) {
    return new Promise((resolve, reject) => {
      const article = state.articles.find(article => article._id == id);
      article ? resolve(article) : reject(`There is not article of id ${id}`);
    });
  },
  addArticle({ commit }, article) {
    commit("addArticle", article);
  }
};
