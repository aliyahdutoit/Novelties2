<template>
  <h1>Check out our cool Products!</h1>

  <!-- products -->
  <div v-if="spinner">
    <CassetteSpinner />
  </div>
  <div v-else class="container">
    <div class="row">
      <!-- spinner -->

      <!-- product card -->

      <div class="col-md-4 col-4" v-for="item in items" :key="item">
        <img
          :src="item.imgURL"
          alt=""
          class="img-fluid rounded-start"
          id="imgprod"
        />
        <div class="card-body">
          <h5 class="card-title text-dark">{{ item.prodName }}</h5>
          <p class="card-text text-dark">
            {{ item.price }}
          </p>
          <p class="card-text">
            <small class="text-muted text-dark">{{ item.category }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import CassetteSpinner from "../components/Spinner.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  components: {
    CassetteSpinner,
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
    const CassetteSpinner = computed(() => store.getters.spinnerStatus);
    return {
      items,
      CassetteSpinner,
    };
  },
};
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
