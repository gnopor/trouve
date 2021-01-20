export const state = () => ({
  user: {}
});

export const getters = {};

export const mutations = {
  setConnected(state, status) {
    state.connected = status;
  }
};

export const actions = {
  emitSignal({ dispatch, state }, payload) {
    const { user } = state;
    payload.sender = user;
    dispatch("socketEmit", {
      action: "emitSignal",
      payload
    });
  }
};
