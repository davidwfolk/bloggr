<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <div class="row">
      <div class="col-8 m-auto">
       <profileBlog v-for="profileBlog in getMyBlogs" :blogData="profileBlog" :key="profileBlog._id">
       </profileBlog>

      </div>
    </div>
  </div>
</template>

<script>
import ProfileBlog from "../components/ProfileBlog.vue";
export default {
  name: "Profile",
  
  created() {
    this.$store.dispatch("getMyBlogs");
    this.$store.dispatch("getProfile");
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    getMyBlogs() {
             return this.$store.state.blogs
    },
  },
  components: {
    ProfileBlog
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
