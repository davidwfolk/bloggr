<template>
  <div class="blogs">
    <h6 class='text-center p-3'>Write a Comment</h6>
    <CreateComment v-if="$auth.isAuthenticated" />
    <small class="text-danger" v-else>You must log in to write a comment.</small>
    <!-- <button class="btn btn-primary" @click="profilePage()">show</button> -->
  </div>
</template>


<script>
import CreateComment from "./CreateComment.vue"
export default {
  name: 'comment',
  props: ["blogData"],
  data(){
    return {
      revealComments: false
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
  components:{ CreateComment }
}
</script>


<style scoped>

</style>