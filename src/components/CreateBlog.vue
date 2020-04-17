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
    <button type="button" class="btn btn-primary" @click="addBlog()">Add Blog</button>
  </div>
</template>


<script>
export default {
  name: "create-blog",
  data() {
    return {
      newBlog: {}
    };
  },
  mounted() {},
  computed: {},
  methods: {
    addBlog() {
      this.$store.dispatch("addBlog", this.newBlog);
      this.newBlog = {};
    },
  },
  components: {}
};
</script>


<style scoped>
</style>