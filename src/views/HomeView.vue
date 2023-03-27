<template>
  <div class="home">
    <BackgroundImage/>
    <ProductView/>
  </div>

</template>

<script>
// @ is an alias to /src

import BackgroundImage from "@/components/BackgroundImage.vue";
import ProductView from "./ProductView.vue";
export default {
  name: 'HomeView',
  components: {
    BackgroundImage,
    ProductView,
}
}
</script>

<style scoped>

.home {
  background-image: url("https://i.postimg.cc/zDHqB19J/aesthetic-purple-dreamer-neonsign.jpg");
  width: 100%;
  padding-left: 100px;
  height: 100vh;
}


</style>