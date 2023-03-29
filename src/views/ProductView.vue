<template>
  <h1>Check out our cool Products!</h1>

  
  <!-- spinner -->
  <div v-if="spinner">
    <Spinner/>
  </div>
  <div v-else class="container">
    <div class="row">
      

      <!-- product card -->
      
      <div class="col-md-4 col-4" v-for="item in items" :key="item" id="prodcard">
        <img
          :src="item.imgURL"
          alt=""
          class="img-fluid rounded-start"
          id="imgprod"
        />
        <div class="card-body">
          <h5 class="card-title text-dark">{{ item.prodName }}</h5>
          <p class="card-text text-dark">
            R{{ item.price }}
          </p>
          <p class="card-text">
            <small class="text-muted text-dark">{{ item.category }}</small>
          </p>
          <router-link
          :to="{ name: 'product', params: { id: item.prodID } }"
          ><a class="btn">View More...</a></router-link>
    <a href="#" class="card-link btn">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>

  <FooterBar />
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Spinner from "../components/Spinner.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  components: {
    Spinner,
    FooterBar
  },
  methods: {
    SortByPrice() {
      this.$store.commit("SortItemsByPrice");
    },
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchItems");
    const items = computed(() => store.state.items);
    const spinner = computed(() => store.getters.spinnerStatus);
    return {
      items,
      spinner,
    };
  },
};
</script>

<style scoped>
img {
  max-width: 200px;
  max-height: 200px;
}

#prodcard {
  background-color: white;
  margin: 10px;
  width: 300px;
  height: 400px;
}
</style>
