<template>
  <div class="create-comment col-12 m-auto">
    <div class="form-group">
      <label for>Body</label>
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
      this.$store.dispatch("addComment", this.newComment);
      this.newComment = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>