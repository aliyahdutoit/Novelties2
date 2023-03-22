<template>
  <div class="home">
    <BackgroundImage/>
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

.home {
  background-image: url("https://i.postimg.cc/zDHqB19J/aesthetic-purple-dreamer-neonsign.jpg");
  width: 80%;
  padding-left: 100px;
  height: 100vh;
}


</style>