<template>
  <nav-bar-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
import NavBarComp from './components/NavBar-comp.vue';
import FooterComp from './components/Footer-comp.vue';

export default {
  components: {NavBarComp, FooterComp}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Quicksand', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FDD2BF;
}
</style>
