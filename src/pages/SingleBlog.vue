
<template>
  <div class="col-12 blog mx-auto text-center
  card border-light p-3 mt-5 mb-5">
      <h2>{{getFullBlog.blog.title}}</h2>
      <h4>{{getFullBlog.blog.creatorEmail}}</h4>
      <p>{{getFullBlog.blog.body}}</p>

        <!-- <button @click="goHome()" type="button"
    class="btn ml-auto" style="color: green">Home</button> -->

  </div>
</template>


<script>
// import Blog from "../components/Blog.vue"
export default {
  name: 'singleBlog',
  // props: ["blogData"],
  data(){
    return {
    }
  },
  // created() {
  //   this.$store.dispatch("getBlog"),
  // },
  computed:{   
    getFullBlog() {
      return this.$store.state.blogDetails
    }
    },
  methods:{
    // goHome() {
    //   this.$router.push({path: "/"})
    // }
      
  },
  components:{
    // Blog
  }
}
</script>


<style scoped>

</style>