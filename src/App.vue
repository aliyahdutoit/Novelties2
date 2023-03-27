<template>
  <div class="bg"> 
    <NavBar/>
    <router-view/>
    <FooterBar/>
  </div>
   
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
    components:{
      NavBar
    }  
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff !important;
  background-color: #020108;
}

</style>
