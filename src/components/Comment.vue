<template>
  <div class="comments">
    <!-- <h6 class='text-center p-3'>Write a Comment</h6>
    <h6>{{blogData.title}}</h6>   NOTE not showing up, seen as undefined -->
    <!-- <CreateComment v-if="$auth.isAuthenticated" />
    <small class="text-danger" v-else>You must log in to write a comment.</small> -->
    <Comment v-for="comment in blogData" :blogData="comment" :key="comment._id">
      </Comment>
  </div>
</template>


<script>
// import CreateComment from "./CreateComment.vue"
export default {
  name: 'comment',
  props: ["blogData"],
  data(){
    return {
    }    
  },
  computed:{

  },
  methods:{
    
    //   profilePage() {
    // this.$store.dispatch("getComments")
    //   },
      // this.$router.push({name: "SingleBlog"})
    },
  components:{ }
}
</script>


<style scoped>

</style>