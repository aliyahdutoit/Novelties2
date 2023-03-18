import { createStore } from 'vuex';
import axios from 'axios';
const renderURL = "https://novelties.onrender.com";

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
      context.commit('spinnerStatus', true)

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
    }
  },
  modules: {
  }
})
