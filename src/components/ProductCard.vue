<template>
  <div v-if="spinner">
    <CassetteSpinner/>
  </div>
    <div>
    <div>
        <div v-for="prodID in items" :key="prodID" class="card mb-3" style="max-wprodIDth: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={{prodID.imgURL}}
                  alt=""
                  class="img-fluprodID rounded-start"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-dark">{{prodID.prodName}}</h5>
                  <p class="card-text text-dark">
                   {{ prodID.prodDescription }}
                  </p>
                  <p class="card-text">
                    <small class="text-muted text-dark">{{prodID.category}}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  
    </div>
</template>

<script>
import {useStore} from "vuex";
import { computed } from "@vue/runtime-core";
import CassetteSpinner from './Spinner.vue';

    export default {
  components: {
    CassetteSpinner
  },
  methods: {
    SortByPrice(){
            this.$store.commit("SortItemsByPrice");
          }
        },
        setup(){
    const store = useStore();
      store.dispatch("fetchItems");
      const items =
      computed( () => store.state.items)
      const spinner = 
      computed(() => store.getters.spinnerStatus);
      return{
        items,
        spinner
      }
  }
        
    }
</script>

<style scoped>

</style>