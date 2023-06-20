<template>
    <article class="post">
      <h3 class="post_title">{{ post.title }}</h3>
      <b-img class="img-thumbnail img-fluid col-5" v-bind:src="post.src" v-bind:alt="post.alt" v-bind:class="{'img': border }" @click="toggle"></b-img>
      <p class="post_text">{{ post.text }}</p>
    </article>
  </template>
  
  <script>
  import { bordermixin } from '../views/bordermixin.js' 

    export default{  
      name: "post",
      props: {post: Array},
      mixins: [bordermixin]
      }
  </script> 

<style scoped>
.img{
  border: 10px solid teal;
}
.post_text {
  width: 40%;
  position: relative;
  left: 430px;
  margin-top: 50px;
}
</style>