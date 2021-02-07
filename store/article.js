export const state = () => ({
  articles: []
});

export const getters = {};

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles;
  },
  addArticle(state, article) {
    state.articles = [...state.articles, article];
  },
  updateArticle(state, article) {
    const index = state.articles.findIndex(entrie => entrie._id == article._id);
    state.articles[index] = article;
  }
};

export const actions = {
  setArticles({ commit }, articles) {
    commit("setArticles", articles);
  },
  getArticle({ state }, id) {
    return new Promise((resolve, reject) => {
      const article = state.articles.find(article => article._id == id);
      article ? resolve(article) : reject(`There is not article of id ${id}`);
    });
  },
  addArticle({ commit }, article) {
    commit("addArticle", article);
  },
  updateArticle({ commit }, article) {
    commit("updateArticle", article);
  }
};
