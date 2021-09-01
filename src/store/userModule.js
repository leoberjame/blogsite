export default {
  namespaced: true,
  state: {
    user: {
      id: null,
      email: null,
      name: null,
      refreshToken: null,
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = { ...user };
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    setUserCredentials({ commit }, payload) {
      if (payload) {
        commit("setUser", payload);
      }
    },
  },
};
