<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <div class="row">
      <div class="col-8 m-auto">
       <blog v-for="blog in getMyBlogs" :blogData="blog" :key="blog._id"></blog>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog.vue";
export default {
  name: "Profile",
  
  created() {
    this.$store.dispatch("getBlogs");
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    getMyBlogs() {
             return this.$store.state.blogs.filter(email => {
        return email.creatorEmail.match(this.profile.name);
      });
    }
  },
  components: {
    Blog
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
