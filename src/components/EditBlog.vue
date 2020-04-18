<template>
  <div class="create-blog col-8 m-auto">
    <div class="form-group">
      <label for>Setup</label>
      <input
        type="text"
        class="form-control"
        placeholder="Title..."
        v-model="newBlog.title"
      />
    </div>
    <div class="form-group">
      <label for>Body</label>
      <textarea
        type="text"
        class="form-control"
        placeholder="Type your blog here..."
        v-model="newBlog.body"></textarea>
    </div>
    <div class="form-group">
      <label for>Image</label>
      <input
        type="text"
        class="form-control"
        placeholder="Upload a Blog Image..."
        v-model="newBlog.imgUrl"
        />
    </div>
    <button type="button" class="btn btn-primary" @click="editBlog()">Edit Blog</button>
  </div>
</template>


<script>
export default {
  name: "edit-blog",
  data() {
    return {
      editedBlog: {}
    };
  },
  mounted() {},
  computed: {},
  methods: {
      editBlog() {
      this.$store.dispatch("editBlog", this.blogData._id);
      }
    },
  components: {}
};
</script>


<style scoped>
</style>