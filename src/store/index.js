import Vue from "vue";
import Vuex from "vuex";
import userModule from "./userModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blog_post: {
      title: String,
      content: String,
      date_created: Date,
    },
  },
  mutations: {},
  actions: {},
  modules: {
    user: userModule,
  },
});
