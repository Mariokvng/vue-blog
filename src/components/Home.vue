<template>
<!-- eslint-disable -->
  <section>
    <Navbar />
  <div class="post-card">
    <div class="post" v-for="post in posts" :key="post._id">
      <h2> {{ post.title }} </h2>
      <p> {{ post.description }} </p>
      <article><span><i class="fas fa-user"></i> {{ post.author }}</span> <span>{{ post.topic }}</span> <span> {{ post.createdAt = new Date(post.createdAt).toDateString() }}</span></article>
    </div>
  </div>
  </section>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Navbar
  },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    axios.get('https://bl0gg3r.herokuapp.com/posts')
    .then(response => {
      console.log(response.data)
      this.posts = response.data
    })
    .catch(err => console.log(err));
  }
}
</script>

<style scoped>
  .post-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .post {
    width: 85%;
    border: 1px solid #e8e8e8;
    background: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin: 2rem auto 1rem auto;
  }
  .post h2 {
    text-align: center;
    letter-spacing: .05rem;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .post p {
    margin: 1.4rem 0;
    font-size: .8rem;
  }
  .post article {
    display: flex;
    width: 100%;
    justify-content: center;
    justify-content: space-between;
    font-size: .5rem;
  }
</style>
