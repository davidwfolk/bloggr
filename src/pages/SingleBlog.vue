
<template>
  <div class="col-12 blog mx-auto text-center
  card border-light p-3 mt-5 mb-5">
      <h2>{{singleBlogDetails.title}}</h2>
      <h4>{{singleBlogDetails.creatorEmail}}</h4>
      <p>{{singleBlogDetails.body}}</p>

        <!-- <button @click="goHome()" type="button"
    class="btn ml-auto" style="color: green">Home</button> -->

  </div>
</template>


<script>
export default {
  name: 'singleBlog',
  // props: ["blogData"],
  data(){
    return {
    }
  },
  created() {
    console.log("created",this.$route.params.blogId )
    this.$store.dispatch("getThisBlog", this.$route.params.blogId)
  },
  computed:{     
    singleBlogDetails() {
      console.log("singleBlogDetails",this.$store.state.activeBlog)
     return this.$store.state.activeBlog.blog;
    },
    // singleCommentsDetails() {
    //   console.log("singleBlogDetails",this.$store.state.activeBlog)
    //  return this.$store.state.activeBlog.comments;
    // }
    },
  methods:{
  },
  components:{
    // Blog
  }
}
</script>


<style scoped>

</style>