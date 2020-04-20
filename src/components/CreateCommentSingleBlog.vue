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
  name: "create-comment-single",
  props: ["commentData"],
  
  data() {
    return {
      newComment: {}

    };
  },
  mounted() {},
  computed: {
    blog() {
      return this.$store.state.activeBlog.blog
    }
    // pullBlogDetails() {
    //   return this.$store.state.blogDetails //NOTE thought I'd try this...not working

    // }
  },
  methods: {
    addComment() {
      this.newComment.blogId = this.blog._id  //NOTE Undefined - adding this doesn't even let the function run
      console.log("blogId", this.blog._id )
      // console.log(this.$route.params);
      this.newComment.creatorEmail = this.blog.creatorEmail  //this seems to be in the right track??
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