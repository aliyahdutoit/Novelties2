<template>
   
    <BackgroundImage/>
<FooterBar/>
</template>

<script>

import BackgroundImage from "@/components/BackgroundImage.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  name: 'HomeView',
  components: {
    BackgroundImage,
    FooterBar
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