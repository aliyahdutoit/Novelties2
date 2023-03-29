<template>
    <div v-if="spinner">
        <Spinner/>
    </div>
    <div v-else>
      
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <img :src="item?.imgURL" alt="">
          </div>
          <div class="col-6">
            <br>
            <br>
            <h4 class="text-light">{{ item?.prodName }}</h4>
            <br>
            <h5 class="text-light">{{ item?.prodDescription }}</h5>
            <br>
            <h5 class="text-light float-start">R{{ item?.price }}</h5>
            <br>
            <h5 class="text-light float-start">{{ item?.category }}</h5>

            <button type="button" class="btn text-light">Add to Cart</button>
          </div>
        </div>
      </div>

    </div>
    <FooterBar/>

</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import Spinner from "../components/Spinner.vue"
import FooterBar from "../components/FooterBar.vue"
export default {
  components: {
    Spinner,
    FooterBar
  },
  setup() {
    const store = useStore();
    const item =
      computed(() => store.state.item);
    const spinner =
      computed(() => store.getters.spinner);
    return {
      item,
      spinner
    }
  },
  mounted() {
    this.$store.dispatch("fetchItem", this.$route.params.id);
  }
}
</script>

<style scoped>
#cardcard {
    width: 670px;
}

.card {
  width: 100%;
  height: 100vh;
}
.btn {
  float: right;
  margin-top: 30px;
}
</style>