<template>
  <div class="col-12 blog m-auto card border-light p-1">
    <p>{{blogData.title}}</p>
    <p>{{blogData.body}}</p>
   
    <!-- <img :src="{{blogData.imgUrl}}"/> -->
    <!-- <button v-on:click="revealComments = !revealComments" class="btn btn-lg btn-dark text-warning">Reveal</button>
  <h4 class="p-2 mt-3" v-show="revealComments" >{{commentData.body}}</h4> -->
    <div class="row p-1 m-1">
    <button type="button" class="btn btn" style="color: green" @click="deleteBlog()">Delete Blog</button>
    <button type="button" class="btn ml-auto" style="color: green" @click="editBlog()">Edit Blog</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'profileBlog',
  props: ["blogData"],
  data(){
    return {
      revealComments: false
    }
  },
  computed:{},
  methods:{
        deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blogData._id);
    },
      editBlog() {
      this.$store.dispatch("editBlog", this.blogData._id);
      }
  },
  components:{}
}
</script>


<style scoped>

</style>