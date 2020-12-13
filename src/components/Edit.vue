<template>
<!-- eslint-disable -->
  <section>
  <Navbar />
  <router-link to="/posts"> <button> Back </button> </router-link> 
  <h2> Edit Post</h2>
  <form @submit.prevent="addToApi">
    <label for="title">
      <span>Title: </span>
     <input type="text" v-model="Post.title" class="inputt-field" placeholder="Black & white">
    </label> 
    
    <label for="description">
      <span>Description: </span>
     <textarea v-model="Post.description" rows="7" placeholder="Write your description"></textarea>
    </label> 
    
    <label for="title">
      <span>Author: </span>
     <input type="text" v-model="Post.author" class="inputt-field" placeholder="John Doe">
    </label> 
    
    <div class="topic">
     <select v-model="Post.topic">
      <option selected> Select your topic </option>
     <option v-for="topic in Topics"  :value="topic.name" :key="topic._id"> {{ topic.name }} </option>
    </select>
    <span class="arrow"><i class="fas fa-angle-down"></i></span>
   </div>
   <button type="submit"> Update </button>
  </form>
  <router-view></router-view>
  </section>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar'
import axios from 'axios'
export default {
  name: 'Edit',
  components: {
    Navbar
  },
  data() {
    return {
      Post: { },
      Topics: { }
    }
  },
  created() {
  let apiUrl = `https://bl0gg3r.herokuapp.com/posts/${this.$route.params.id}`
    axios.get(apiUrl)
    .then(response => this.Post = response.data )
    .catch(err => console.log(err));
    
    axios.get('https://bl0gg3r.herokuapp.com/topics')
    .then(response => {
      console.log(response.data)
      this.Topics = response.data
    })
    .catch(err => console.log(err));
  },
  methods: {
    addToApi () {
      let apiURL = `https://bl0gg3r.herokuapp.com/posts/update/${this.$route.params.id}`
     axios.post(apiURL, this.Post)
     .then((response) => {
       if(response.status === 200) {
          this.$router.push('/posts')
         }
      })
     .catch(err => console.log(err))
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
form {
  position: relative;
 height: 100vh;
  width: 100%;
}
.inputt-field {
  width: 80%;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 0px 3px 3px 0px;
  /* display: block; */
  margin: 20px auto;
  outline: none;
  position: relative;
  font-family: "Nunito", sans-serif;
  transition: .4s ease-in-out;
}
label {
  display: block;
  width: 90%;
  margin: .65rem auto;
  /* border: 1px solid red; */
}
label span {
  display: inline-block;
  font-family: "Lato", sans-serif;
  /* border: 1px solid gold; */
  /* margin: 2rem  1.8rem 0 1.8rem; */
  font-size: .8rem;
}
.inputt-field, textarea {
  border-radius: 3px;
  margin: 1px auto;
  display: block;
  width: 92%;
  font-size: .8rem;
  padding: 0 12px;
}
textarea {
  resize: none;
  padding: 12px;
  outline: none;
}
.inputt-field:focus, textarea:focus {
	border: 1px solid #0275d8;
	box-shadow: 0 0 1px #0275d8;
}
::-webkit-input-placeholder { /* Edge */
  font-family: "Lato", sans-serif;
  font-size: .8rem;
}
.topic {
  position: relative;
  width: 90%;
  margin: 0 auto;
}
select {
  width: 100%;
  font-size: 85%;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  background: transparent;
  /* border-radius: 5px; */
  border: 1px solid rgba(0, 0, 0, 0.2);
  /* border-bottom: 2px solid #962d22; */
  color: black;
  padding: 13px;
  margin: .65rem 0;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: 0.4s ease;
}
/* For IE <= 11 */
select::-ms-expand {
  display: none; 
}
select:hover,
select:focus{
  background-color: #f1f1f1;
  border-color: #fff;
  /* border-bottom-color: #DCDCDC; */
}
.arrow {
  position: absolute;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
}
</style>
