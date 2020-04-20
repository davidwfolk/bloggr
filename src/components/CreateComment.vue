<template>
  <div class="create-comment col-12 m-auto">
    <div class="form-group">
      <label for>Comment</label>
   <!-- <div v-if="this.commentData.creatorEmail == this.profile.email"> -->
      <textarea
        type="text"
        class="form-control"
        placeholder="Type your comment here..."
        v-model="newComment.body"></textarea>
    </div>
    <button type="button" class="btn btn-primary" @click="addComment()">Add comment</button>
  </div>
</template>


<script>

export default {
  name: "create-comment",
  props: ["blogData"],
  
  data() {
    return {
      newComment: {}

    };
  },
  mounted() {},
  computed: {

  },
  methods: {
    addComment() {
      this.newComment.blogId = this.blogData.blog._id
      console.log("blogId", this.blogData.blog._id )
      // console.log(this.$route.params);
      this.newComment.creatorEmail = this.blogData.blog.creatorEmail
      this.$store.dispatch("addComment", this.newComment);
      this.newComment = {};
      console.log("creatorEmail", this.blogData.blog.creatorEmail)
    }
  },
  components: {}
};
</script>


<style scoped>
</style>