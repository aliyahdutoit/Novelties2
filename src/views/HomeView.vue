<template>
  <div class="home">
    <BackgroundImage/>
    <img class="img" src="https://i.postimg.cc/zDHqB19J/aesthetic-purple-dreamer-neonsign.jpg" alt="">
  </div>
  
  <ProductCard/>

</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue';
import BackgroundImage from "@/components/BackgroundImage.vue";
export default {
  name: 'HomeView',
  components: {
      ProductCard,
      BackgroundImage,
  }
}
</script>

<style scoped>

.img {
  width: 100%;
  height: 100vh;
  
}


</style>