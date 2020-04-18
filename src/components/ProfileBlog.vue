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
        <button @click="editBlog(data)" type="button"
    class="btn ml-auto" style="color: green">Submit</button>
      </form>
    </div>
    <!-- <img :src="{{blogData.imgUrl}}"/> -->
    <!-- <button v-on:click="revealComments = !revealComments" class="btn btn-lg btn-dark text-warning">Reveal</button>
  <h4 class="p-2 mt-3" v-show="revealComments" >{{commentData.body}}</h4> -->
    <div class="row p-1 m-1">
    <button type="button" class="btn btn m-auto" style="color: green" @click="deleteBlog()">Delete Blog</button>
    <button type="button" class="btn m-auto" style="color: green" @click="getCommentsByBlogId()">Show Comments</button>
    <button type="button" class="btn m-auto" style="color: green" @click="editing=true">Edit Blog</button>
    </div>
  </div>
</template>


<script>
import CreateComment from "./CreateComment"
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
  computed:{},
  methods:{
       deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blogData._id);
    },
      editBlog(data) {
        debugger
      this.$store.dispatch("editBlog", this.blogData._id,this.blogData);
      this.editing = false
      },
      getCommentsByBlogId() {
        this.$store.dispatch("getCommentsByBlogId", this.blogData._id)
      }
      
  },
  components:{
    CreateComment
  }
}
</script>


<style scoped>

</style>