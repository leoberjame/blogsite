import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: Number,
      email: String,
    },
    blog_post: {
      title: String,
      content: String,
      date_created: Date,
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
