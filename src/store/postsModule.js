export default {
  namespaced: true,
  state: {
    blogPosts: [
      {
        id: null,
        userId: null,
        title: null,
        content: null,
        dateCreated: null,
      },
    ],
  },
  mutations: {
    addPost(state, post) {
      if (state.blogPosts.length < 1) state.blogPosts = post;
      state.blogPosts.push(post);
    },
  },
  getters: {
    getPosts(state) {
      return state.blogPosts;
    },
  },
  actions: {
    creatPost({ commit }, payload) {
      if (payload) {
        commit("addPost", payload);
      }
    },
  },
};
