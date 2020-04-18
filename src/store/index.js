import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    comments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs (state, blogs) {
      state.blogs = blogs
    },
    setComments (state, comments) {
      state.comments = comments
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
      let res = await api.get('profile/blogs/');
    commit('setBlogs', res.data)
    } catch (error) {
      console.error(error)
    }
  },
  async deleteBlog({ commit, dispatch }, blogId) {
    try {
      let res = await api.delete('blogs/' + blogId);
      dispatch('getMyBlogs')
    } catch (error) {
      console.error(error)
    }
},
async editBlog({ commit, dispatch }, blogId) {
  try {
    debugger
    let res = await api.put('blogs/' + blogId._id, blogId);
    commit('setBlogs', res.data)
    dispatch('getMyBlogs')
  } catch (error) {
    console.error(error)
  }
},
async addComment({ commit, dispatch }, newComment) {
  try {
    let res = await api.post('comments', newComment)
    dispatch('getComments')
  } catch (error) {
    console.error(error)
  }
},
async getCommentsByBlogId({commit, dispatch}, blogId) {
  try{
    let res = await api.get('comments/' + blogId)
    let found = 
    commit('setComments', res.data)
  } catch (error) {
    console.error(error)

  }
},
async getComments({commit, dispatch}) {
  try{
    let res = await api.get('comments')
    commit('setComments', res.data)
  } catch (error) {
    console.error(error)

  }
},
  }
});
