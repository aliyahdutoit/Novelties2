import { createStore } from 'vuex';
import axios from 'axios';
const renderURL = "https://novelties.onrender.com";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinnerStatus: true,
    message: null,
    asc: false,
    logIn: false
  },

  getters: {
    spinnerStatus(state) {
      return state.spinnerStatus
    }

  },
  mutations: {
    setUsers(state, values) {
     state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setMessage(state, value) {
      state.message = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct (state, value) {
      state.product = value
    },
    spinnerStatus(status, newSpinnerStatus) {
      state.spinnerStatus = newSpinnerStatus
    },
    SortProductsByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    }
  },

  actions: {
    async fetchUsers(context){
      context.commit('spinnerStatus', true)

      const res = await axios.get(`${renderURL}/users`);
      const {results, err} = await res.data;

      if(results){
        context.commit('setUsers', results);
        context.commit('spinnerStatus', false)
      } else {
        context.commit('setMessage', err);
        context.commit('spinnerStatus', true)
      }
    },
    async fetchProducts(context){
      context.commit('spinnerStatus', true)

      const res = await axios.get(`${renderURL}/products`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setProducts', results);
        context.commit('spinnerStatus', false);
      } else {
        context.commit('setMessage', err);
        context.commit('spinnerStatus', true);

      }
    },
    async fetchSingleProduct(context, id){
      context.commit('spinnerStatus', true)

      const res = await axios.get(`${renderURL}/products/${id}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setProduct', results[0]);
        context.commit('spinnerStatus', false);
      } else {
        context.commit('setMessage', err);
        context.commit('spinnerStatus', true);
      }
    },
    deleteUser: async (context, id)=> {
      let res = await axios.delete(`${renderURL}users/${id}`);
      if(res) {
        context.dispatch("fetchUsers");
      }
    }
  },
  modules: {
  }
})
