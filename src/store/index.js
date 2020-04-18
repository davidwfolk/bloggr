import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    blogDetails: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs (state, blogs) {
      state.blogs = blogs
    },
    setBlogDetails (state, blog) {
      state.blogDetails = blog
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
    async getBlog({commit, dispatch}, blogId) {
      try{
        let res = await api.get('blogs/' + blogId._id)
        commit('setBlogDetails', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getSingleBlog({commit, dispatch}, blogId) {
      try{
        let res = await api.get('blogs/' + blogId._id )
        dispatch('setBlogs')
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
    let res = await api.put('blogs/' + blogId._id, blogId);
    commit('setBlogs', res.data)
    dispatch('getMyBlogs')
  } catch (error) {
    console.error(error)
  }
},


// NOTE Comments //


async addComment({ commit, dispatch }, newComment) {
  try {
    debugger
    let res = await api.post('comments', newComment)
    console.log(res.data)
    dispatch('getBlog', newComment.blogId)
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
async getComments({commit, dispatch}, commentsId) {
  try{
    let res = await api.get('comments/' + commentsId)
    commit('setComments', res.data)
  } catch (error) {
    console.error(error)

  }
},
  }
});
