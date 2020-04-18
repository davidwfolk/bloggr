<template>
  <div class="blogs">
    <h1 class='text-center p-3'>Write a Blog</h1>
    <CreateBlog v-if="$auth.isAuthenticated" />
    <small class="text-danger" v-else>You must log in to write a blog.</small>
  </div>
</template>


<script>
import CreateBlog from "../components/CreateBlog.vue";
export default {
  name: "createBlog",
  data() {
    return {};
  },
  mounted() {},
  computed: {
  },
  methods: {},
  components: { CreateBlog }
};
</script>


<style scoped>
</style>