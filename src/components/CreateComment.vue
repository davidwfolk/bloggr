<template>
  <div class="create-comment col-12 m-auto">
    <div class="form-group">
      <label for>Comment</label>
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
  data() {
    return {
      newComment: {}
    };
  },
  mounted() {},
  computed: {},
  methods: {
    addComment() {
      this.newComment.blogId == this.$route.params._id
      this.$store.dispatch("addComment", this.newComment);
      this.newComment = {};
      console.log(this.newComment.blogId)
    }
  },
  components: {}
};
</script>


<style scoped>
</style>