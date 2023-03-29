import { createStore } from 'vuex';
import axios from 'axios';
const renderURL = "https://novelties.onrender.com";
import {useCookies} from 'vue3-cookies';
const {cookies} = useCookies();
import Swal from 'sweetalert';
import router from '@/router';
// const {payload} = payload();
// import router from "router";

export default createStore({
  state: {
    users: null,
    user: null,
    items: null,
    item: null,
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
    setItems(state, values) {
      state.items = values
    },
    setItem (state, value) {
      state.item = value
    },
    spinnerStatus(state, newSpinnerStatus) {
      state.spinnerStatus = newSpinnerStatus
    },
    SortItemsByPrice: (state) => {
      state.items.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.items.reverse();
      }
      state.asc = !state.asc;
    },
    SortItemsByName: (state) => {
      state.products.sort((a, b)=> {
        return a.prodName.localeCompare(b.prodName);
      });
      if(!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
    setCategory(state, category) {
      state.category = category
    },

    setSearchByName(state, searchByName) {
      state.searchByName = searchByName
    }

  },
  

  actions: {
    // FETCH ALL USERS
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
    // FETCH ALL ITEMS //
    async fetchItems(context){
      context.commit('spinnerStatus', true)

      const res = await axios.get(`${renderURL}/items`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setItems', results);
        context.commit('spinnerStatus', false);
      } else {
        context.commit('setMessage', err);
        context.commit('spinnerStatus', true);

      }
    },
    // FETCH SINGLE ITEM //
    async fetchItem(context, id){
      context.commit('spinnerStatus', true);

      const res = await axios.get(`${renderURL}/item/${id}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setItem', results[0]);
        context.commit('spinnerStatus', false);
      } else {
        context.commit('setMessage', err);
        context.commit('spinnerStatus', true);
      }
    },
    // DELETE USER //
    deleteUser: async (context, id)=> {
      let res = await axios.delete(`${renderURL}users/${id}`);
      if(res) {
        context.dispatch("fetchUsers");
      }
    },
    // REGISTER A USER //
    async register({ commit }, payload) {
      try {
        const res = await axios.post(`${renderURL}/register`, payload);
        const { results, err } = await res.data;
        if (results) {
          commit("setUser", results);
          Swal({
            icon: "success",
            title: "Register Successful",
            timer: 1000,
          });
          router.push({ name: "login" });
        } else {
          commit("setMessage", err);
        }
      } catch (error) {
        console.error(error);
      }
    },
    //  LOGIN A USER //
    async login({commit}, payload) {
      try {
        const res = await axios.post(`${renderURL}/login`, payload); 
          const { result, jwToken} = await res.data
          if(result) {
            commit('setUser', result);
            commit('setToken', jwToken);
            cookies.set('user_cookie_value', jwToken);
            Swal({
              icon: "success",
              title: "Login Successful",
              timer: 1000,
            });
          } else {
            Swal({
              icon: "error",
              title: "Login unsuccessful",
              timer: 500,
            });
          }
        } catch (error) {
          console.error(error);
        }
      },
      // LOGOUT A USER //
      async logout({commit}) {
        commit('clearToken')
      }
  },
  modules: {
  }
})
