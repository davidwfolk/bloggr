<template>
  <div class="home text-center">
    <h1 class="text-center pt-5">Welcome to the   
      <img alt="Vue logo" src="../assets/bloggrlogo.png" class="img-fluid" style="max-width: 15%"/>
    </h1>
    <input
      v-model="search"
      id="sortJokes"
      class="form-control text-center form-control-sm mx-auto p-3 w-75"
      type="text"
      placeholder="Find blogs by user..."
      aria-label="Search"
      />
    <div class="allBlogs row">
      <div class="col-12 m-3">
        <blog v-for="blog in sortBlogs" :blogData="blog" :key="blog._id"></blog>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog.vue";
export default {
  name: "home",
  data() {
    return {
      search: ""
    };
  },

  created() {
    this.$store.dispatch("getBlogs");
  },
  computed: {
//     allBlogs() {
//       return this.$store.state.blogs;
//     },
    sortBlogs: function() {
      return this.$store.state.blogs.filter(email => {
        return email.creatorEmail.match(this.search);
      });
    }
  },

//   methods: {},
  
  components: {
    Blog
  }
};
</script>
