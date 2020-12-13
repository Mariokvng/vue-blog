<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
body, html {
  font-size: 16px;
  scroll-behavior: smooth;
  font-family: "Nunito", sans-serif;
}
h1, h2, h3, h4, h5 {
  font-family: "Lato", sans-serif;
}
#app {
  color: #2c3e50;
}
</style>
