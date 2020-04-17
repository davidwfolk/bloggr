<template>
  <div class="blog m-5 card border-light text-center p-1">
    <p>{{blogData.title}}</p>
    <p>{{blogData.body}}</p>
    <button type="button" class="btn btn-primary" @click="deleteBlog()">Delete Blog</button>
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
    deleteBlog() {
      this.$router.push({ name: "Blogs" });
      this.$store.dispatch("deleteBlog", this.blog._id);

    }
  },
  components:{}
}
</script>


<style scoped>

</style>