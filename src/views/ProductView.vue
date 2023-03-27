<template>
    <div id="products">
      <h1>Check out our cool Products!</h1>
      
   <!-- products -->
          <div class="row g-0">
            <div class="col-md-4 col-4">

        <ProductCard
        v-for="item in items" key="item.id" :item="item"
        />
        </div>
        </div>
          </div>
          
<FooterBar/>
</template>

<script>
import FooterBar from "@/components/FooterBar.vue";
import ProductCard from "../components/ProductCard.vue";
    export default {
        components: {
          ProductCard,
          FooterBar,
        }
    }
</script>

<style scoped>

</style>