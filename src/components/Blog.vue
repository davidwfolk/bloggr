<template>
  <div class="blog col-8 mx-auto mb-2 card border-light text-center p-1">
    <p>{{blogData.title}}</p>
    <p>{{blogData.creatorEmail}}</p>
    <button class="btn btn-primary" @click="selectBlog()">View Blog</button>
   
    <!-- <img :src="{{blogData.imgUrl}}"/> -->
    <!-- <button v-on:click="revealComments = !revealComments" class="btn btn-lg btn-dark text-warning">Reveal</button>
  <h4 class="p-2 mt-3" v-show="revealComments" >{{commentData.body}}</h4> -->
  </div>
</template>


<script>
export default {
  name: 'blog',
  props: ["blogData"],
  data(){
  
    return {
      revealComments: false
    }
    
  },

  computed:{},
  methods:{
    selectBlog() {
      this.$store.commit("setActiveBlog", {})
      this.$router.push({
        name: "SingleBlog",
        params: {blogId: this.blogData._id}
      })
    }
  },
  components:{}
}
</script>


<style scoped>

</style>