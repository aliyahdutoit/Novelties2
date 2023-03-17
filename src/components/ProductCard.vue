<template>
    <div v-if="products">
    <div>
        <div v-for="id in products" :key="id" class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={{id.imgURL}}
                  alt=""
                  class="img-fluid rounded-start"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{id.prodName}}</h5>
                  <p class="card-text">
                   {{ id.prodDescription }}
                  </p>
                  <p class="card-text">
                    <small class="text-muted">{{id.category}}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  
    </div>
</template>

<script>

    export default {
        name: 'ProductCard' 
        
    }
</script>

<style lang="scss" scoped>

</style>