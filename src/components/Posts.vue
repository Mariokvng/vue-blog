<template>
  <section>
  <Navbar />
  <!-- eslint-disable -->
  <div class="links">
   <router-link to="/posts/create"> <button> Add post </button> </router-link> 
   <router-link to="/topics"> <button> Add topic </button> </router-link> 
  </div>
  <h2> Manage Posts</h2>
  <div class="posts">
    <table class="table small">
      <thead class="thead-light">
      <tr>
      <th scope="col">S/N</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Action</th>
      </tr>
      </thead>
     <tbody>
    <tr v-for="(post, index) in Posts" :key="post._id">
      <th scope="row"> {{ index += 1}}</th>
      <td>{{ post.title }}</td>
      <td>{{ post.author }} </td>
      <td>
        <div class="action">
      <router-link :to="{ name: 'Edit', params: { id: post._id } }" tag="li">  <span><i class="fas fa-edit"></i></span>  </router-link>
      <span @click="remove(post, post._id)"><i class="fas fa-trash"></i></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>
  </div>
  <router-view></router-view>
  </section>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar'
import axios from 'axios'
export default {
  name: 'Posts',
  components: {
    Navbar
  },
  data () {
    return {
      Posts: []
    }
  },
  mounted () {
    axios.get('https://bl0gg3r.herokuapp.com/posts')
    .then(response => {
      console.log(response.data)
      this.Posts = response.data
    })
    .catch(err => console.log(err));
  },
  methods: {
    remove(post, id) {
      axios.delete('https://bl0gg3r.herokuapp.com/posts/' + id)
      .then(response => this.post.splice(index, 1))
      .catch(err => console.log(err))
      
      window.location.reload();
    }
  }
}
</script>

<style scoped>
h2 {
 text-align: center;
 font-family: 'Lato', sans-serif;
 margin: 2rem 0;
}
.links {
  display: flex;
}
button {
  outline: none;
  background: #0275d8;
  border: 0;
  padding: .6rem 1rem;
  font-family: "Lato", sans-serif;
  margin: 2rem 0 0 1rem;
  border-radius: 5px;
  color: white;
  position: relative;
  z-index: 900;
}
table {
  border-collapse: collapse;
}
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #858796;
  margin-top: 3rem;
  font-family: "Lato", sans-serif;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #e3e6f0;
}
.table td {
  text-align: center;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #e3e6f0;
}
.table tbody+tbody {
  border-top: 2px solid #e3e6f0;
}
.table .thead-light th{
  color: #6e707e;
  background-color: #eaecf4;
  border-color: #e3e6f0;
}
.small {
  font-size: 80%;
  font-weight: 400;
}
.action {
  display: flex;
  justify-content: space-around;
}
.action li {
  position: relative;
}
 .action li:first-child span {
   color: #445ae3;
}
.action span{
  color: #df4759;
  position: relative;
}
</style>
