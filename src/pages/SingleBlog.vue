
<template>
  <div class="col-12 blog mx-auto text-center
  card border-light p-3 mt-5 mb-5">
      <h2>{{singleBlogDetails.title}}</h2>
      <h4>{{singleBlogDetails.creatorEmail}}</h4>
      <p>{{singleBlogDetails.body}}</p>
      <div v-if="!edit">
          <button class="btn btn-light" @click="showComments()">ShowComments</button>
        </div>
        <div v-else>
          <comment v-for="comment in singleCommentsDetails" :commentData="comment" :key="comment._id"></comment>
          <CreateCommentSingleBlog :blogData="getThisBlog" v-if="$auth.isAuthenticated"></CreateCommentSingleBlog>
          <small class="text-danger" v-else>You must log in to leave a comment.</small>
        </div>

        <!-- <button @click="goHome()" type="button"
    class="btn ml-auto" style="color: green">Home</button> -->

  </div>
</template>


<script>
import Comment from "../components/Comment.vue"
import CreateCommentSingleBlog from "../components/CreateCommentSingleBlog.vue"
export default {
  name: 'singleBlog',
  props: ["blogData"],
  data(){
    return {
      edit: false
    }
  },
  created() {
    console.log("created",this.$route.params.blogId )
    this.$store.dispatch("getThisBlog", this.$route.params.blogId)
    this.$store.dispatch("getThisBlog", this.blogData._id)
    this.$store.dispatch("getProfile");
  },
  computed:{     
    singleBlogDetails() {
      console.log("singleBlogDetails",this.$store.state.activeBlog)
     return this.$store.state.activeBlog.blog;
    },
    singleCommentsDetails() {
      console.log("singleCommentsDetails",this.$store.state.activeBlog)
     return this.$store.state.activeBlog.comments;
    },
    profile() {
      return this.$store.state.profile;
    }
    },
  methods:{
          showComments() {
        this.$store.dispatch("getThisBlog", this.commentData);
        this.edit = true
      },
  },
  components:{
    Comment,
    CreateCommentSingleBlog
}
}
</script>


<style scoped>

</style>