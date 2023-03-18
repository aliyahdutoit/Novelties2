<template>
    <div>
        <!-- search bar -->
        <div class="input-group">
            <div class="form-outline">
              <input id="search-focus" type="search" class="form-control" />
              <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <!-- products -->
        <ProductCard/>

    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
    export default {
        components: {
          ProductCard
        }
    }
</script>

<style lang="scss" scoped>

</style>