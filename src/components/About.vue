<template>
  <section>
  <Navbar />
  <h2> This is an about page </h2>
  </section>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'About',
  components: {
    Navbar
  }
}
</script>

<style scoped>
h2 {
 text-align: center;
 font-family: 'Lato', sans-serif;
 margin: 3rem 0;
}
</style>
