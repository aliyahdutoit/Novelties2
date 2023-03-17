<template>
  <div class="home">
    <img class="img" src="https://i.postimg.cc/hG8sRYV4/c1856273-ca75-4b0d-a8e3-d964d699d57b.jpg" alt="">
  </div>
  
  <ProductCard/>

</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue';
export default {
  name: 'HomeView',
  components: {
      ProductCard
  }
}
</script>

<style scoped>

.img {
  width: 100%;
  height: 100vh;
}


</style>