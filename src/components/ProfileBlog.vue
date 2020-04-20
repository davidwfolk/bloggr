<template>
  <div class="col-12 blog mx-auto card border-light p-1 mb-5">
      <div v-if="!editing">
      <p>{{blogData.title}}</p>
      <p>{{blogData.body}}</p>

      </div>
      
    <div v-else>
      <form class="col-12">
        <div>

        <input
          v-model="blogData.title"
         />
        </div>
        <div>
         <textarea rows="8" cols="80"
          v-model="blogData.body"
         />
        </div>
        <button @click="editBlog()" type="button"
        class="btn ml-auto" style="color: green">Submit</button>
      </form>
    </div>
      <div class="comments">
        <small class="text-danger"></small>
       </div>
    <!-- <div v-if="!editing">
      <p>{{commentData.title}}</p>
      <p>{{commentData.body}}</p>

      </div> -->


    <!-- <img :src="{{blogData.imgUrl}}"/> -->
    <!-- <button v-on:click="revealComments = !revealComments" class="btn btn-lg btn-dark text-warning">Reveal</button>
  <h4 class="p-2 mt-3" v-show="revealComments" >{{commentData.body}}</h4> -->
    <div class="row p-1 m-1">
    <button type="button" class="btn btn m-auto" style="color: green" @click="deleteBlog()">Delete Blog</button>
    <button type="button" class="btn m-auto" style="color: green" @click="editing=true">Edit Blog</button>
    </div>
           <!-- <blogComment v-for="blogComment in getComments" :blogData="blogComment" :key="blogComment._id">
       </blogComment> -->
        <!-- <div v-if="!edit">
          <button class="btn btn-light" @click="showComments()">ShowComments</button>
        </div>
        <div v-else>
        <Comment :blogData="getBlog.comments"></Comment>
        <div></div>
        <CreateComment :blogData="getBlog" v-if="$auth.isAuthenticated"></CreateComment>
        <small class="text-danger" v-else>You must log in to leave a comment.</small>
        </div> -->
  </div>
</template>


<script>
import Comment from "./Comment.vue"
import CreateComment from "./CreateComment.vue"
export default {
  name: 'profileBlog',
  props: ["blogData", "commentData"],

  data(){
    return {
      revealComments: false,
      editing: false,
      data: "",
      edit: false
    }
  },
  created() {
    this.$store.dispatch("getBlog");
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getThisBlog", this.$route.params.blogId),
    this.$store.dispatch("getThisBlog", this.blogData._id)
  },
  computed:{
    getBlog() {
      return this.$store.state.blogDetails;
    },
    getMyBlogs() {
      return this.$store.state.blogs
    },
        singleCommentsDetails() {
    console.log("singleBlogDetails",this.$store.state.activeBlog)
     return this.$store.state.activeBlog.comments;
    }
  },

  methods:{
       deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blogData._id);
    },
      editBlog() {
      this.$store.dispatch("editBlog", this.blogData);
      this.editing = false
      },
      showComments() {
        this.$store.dispatch("getBlog", this.blogData);
        this.edit = true
      },
  },
  components:{
    Comment,
    CreateComment
  }
}
</script>


<style scoped>

</style>