<template>
  <div class="blog m-5 card border-light text-center p-1">
    <p>{{blogData.title}}</p>
    <p>{{blogData.body}}</p>
    <!-- <img :src="{{blogData.imgUrl}}"/> -->
    <!-- <button v-on:click="revealComments = !revealComments" class="btn btn-lg btn-dark text-warning">Reveal</button>
  <h4 class="p-2 mt-3" v-show="revealComments" >{{commentData.body}}</h4> -->
  </div>
</template>


<script>
export default {
  name: 'blog',
  props: ["blogData"],
  data(){
    return {
      revealComments: false
    }
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>