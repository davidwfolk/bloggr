import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs (state, blogs) {
      state.blogs = blogs
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogs({commit, dispatch}) {
      try{
        let res = await api.get('blogs')
        commit('setBlogs', res.data)
      } catch (error) {
        console.error(error)

      }
    },
    async sortBlogs({commit, dispatch }, userBlog){
      try {
        let res = await api.get('profile');
      commit('setUserBlogs', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addBlog({ commit, dispatch }, newBlog) {
      try {
        let res = await api.post('blogs', newBlog)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
  },
  async getMyBlogs({commit, dispatch }, userBlog){
    try {
      let res = await api.get('profile', userBlog);
    commit('setUserBlogs', res.data)
    } catch (error) {
      console.error(error)
    }
  },
  },
});
