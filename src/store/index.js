import Vue from "vue";
import Vuex from "vuex";
import postsModule from "./postsModule";
import userModule from "./userModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: userModule,
    posts: postsModule,
  },
});
