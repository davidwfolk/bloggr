<template>
  <div class="comments">
    <!-- <h6 class='text-center p-3'>Write a Comment</h6>
    <h6>{{blogData.title}}</h6>   NOTE not showing up, seen as undefined-->
    <!-- <CreateComment v-if="$auth.isAuthenticated" />
    <small class="text-danger" v-else>You must log in to write a comment.</small>-->
    <div class="border m-1 bg-light">
      <div v-if="!editing">
        <h5 style="color: green">{{commentData.body}}</h5>
        <div>{{commentData.creatorEmail}}</div>
          <div v-if="this.commentData.creatorEmail == this.profile.email">
        <button
          type="button"
          class="btn m-auto"
          style="color: green"
          @click="editing=true"
        >Edit Comment</button>
        </div>
        <div v-if="this.commentData.creatorEmail == this.profile.email">
            <button
              type="button"
              class="btn btn m-auto"
              style="color: green"
              @click="deleteComment()"
            >Delete Comment</button>
        </div>
      </div>
      <div v-else>
        <form class="col-12">
          <div>
            <textarea rows="8" cols="80" v-model="commentData.body" />
          </div>
          <button
            @click="editComment()"
            type="button"
            class="btn ml-auto"
            style="color: green"
          >Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
// import CreateComment from "./CreateComment.vue"
export default {
  name: "comment",
  props: ["commentData"],
  data() {
    return {
      editing: false
    };
  },
  computed: {
    profile () {
      return this.$store.state.profile
    }
  },
  methods: {
    editComment() {
      this.$store.dispatch("editComment", this.commentData);
      this.editing = false;
    },
      deleteComment() {
      this.$store.dispatch("deleteComment", this.commentData);
      
    },
    //   profilePage() {
    // this.$store.dispatch("getComments")
    //   },
    // this.$router.push({name: "SingleBlog"})
  },
  components: {}
};
</script>


<style scoped>
</style>