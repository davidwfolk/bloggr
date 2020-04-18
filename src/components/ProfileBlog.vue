<template>
  <div class="col-12 blog mx-auto card border-light p-1 mb-5">
      <div v-if="!editing">
      <p>{{blogData.title}}</p>
      <p>{{blogData.body}}</p>

      </div>
    <div v-else>
      <form class="col-8 m-auto">
        <div>

        <input
          v-model="blogData.title"
         />
        </div>
        <div>
         <textarea
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
           <blogComment v-for="blogComment in getComments" :blogData="blogComment" :key="blogComment._id">
       </blogComment>
        <Comment />
  </div>
</template>


<script>
import Comment from "./Comment.vue"
export default {
  name: 'profileBlog',
  props: ["blogData"], 
  data(){
    return {
      revealComments: false,
      editing: false,
      data: ""
    }
  },
  computed:{
      // getComments () {
      //   return this.$store.state.comments
      // }
  },
  methods:{
       deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blogData._id);
    },
      editBlog() {
      this.$store.dispatch("editBlog", this.blogData);
      this.editing = false
      },
      // getCommentsByBlogId() {
      //   this.$store.dispatch("getCommentsByBlogId",)
      // }
      
  },
  components:{
    Comment
  }
}
</script>


<style scoped>

</style>