<template>
  <!-- Header --->
<header>
  <main>
    <nav id="myHeader">
     <div class="navbody">
      <router-link to="/"> <h2>Vue blog</h2> </router-link>
       <div class="hamburger" @click="open">
       <div class="navbar start"></div>
       <div class="navbar middle"></div>
       <div class="navbar end"></div>
       </div>
     </div>
   <div class="navpanel">
     <ul class="nav-container">
     <router-link v-for="list in lists" :key="list" :to="list.to"> <li> {{ list.name }} </li> </router-link>
     <router-view></router-view>
     </ul>
   </div>
    </nav>
  </main>
</header>
<!-- // Header --->
</template>

<script>
/* eslint-disable */
export default {
  name: 'Navbar',
  data () {
    return {
      lists: [
        { name: 'Home', to: '/' },
        { name: 'Crud', to: '/posts' },
        { name: 'About', to: '/about' }
      ]
    }
  },
  methods: {
    open () {
      const navPanel = document.querySelector('.navpanel')
      const navBody = document.querySelector('.navbody')
      const hamburger = document.querySelector('.hamburger')
      hamburger.addEventListener('click', () => {
        navPanel.classList.toggle('open')
        if (navPanel.classList.contains('open')) {
          navBody.style.transform = 'translateX(-65%)'

        } else {
          navBody.style.transform = 'translateX(0%)'
        }
        hamburger.classList.toggle('active')
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
header {
  position: relative;
  height: 10vh;
  width: 100%;
  /* border: 1px solid red; */
  font-size: 14px;
}
nav {
  height: 10vh;
  width: 100%;
  /* border: 1px solid green; */
  position: relative;
  background: #445ae3;
  transition: .2s ease-out;
}
.navbody {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
  /* border: 1px solid blue; */
  transition: 0.5s ease-in-out;
}
.navbody h2 {
  font-weight: bold;
  text-transform: uppercase;
  z-index: 999;
  color: #fff;
  letter-spacing: .15rem;
  font-family: "Lato", sans-serif;
}
.navbody .navbar {
  width: 25px;
  height: 2px;
  border-radius: 3rem;
  background: #fff;
  margin: 5px 0;
  transition: .5s cubic-bezier(0.68, -0.55, 0.265, 1.55) .4s;
  z-index: 999!important;
}
.active .navbar.start {
  transform: rotateZ(-45deg) translate(-6px, 6px);
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) .4s;
}
.active .navbar.end {
  transform: rotateZ(45deg) translate(-4px, -4px);
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) .4s;
}
.active .navbar.middle {
  background: transparent;
  transition: .5s ease-in-out .4s;
}
main {
  /* background: green; */
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.navpanel {
  height: 100vh;
  width: 70%;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(101%);
  transition: 0.6s cubic-bezier(0.680, 0, 0.265, 1);
  z-index: 200;
}
.navpanel .nav-container {
  width: 100%;
  height: 100%;
  background: #333;
  padding-top: 4.3rem;
}

.open {
  transform: translateX(0);
  transition: 0.6s cubic-bezier(0.680, 0, 0.265, 1);
  /* z-index: 999; */
}
.navpanel .nav-container li {
  padding: 1rem 0 .5rem 0;
  border-bottom: 1px solid #ccc;
  margin: 0 1.2rem;
  text-align: center;
}
.navpanel .nav-container li {
  /* padding: .6rem 1rem; */
  font-size: .8rem;
  color: #fff;
  text-align: center;
  letter-spacing: .08rem;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  transition: 0.4s ease-in-out;
}
.navpanel .nav-container li:hover {
  color: #fdc840;
}
</style>
