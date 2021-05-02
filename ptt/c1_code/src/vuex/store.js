import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    users: [],
    childrens: [],
  },
  mutations: {
    SET_USERS_TO_STATE: (state, users) => {
      state.users = users;
    },
  },
  actions: {
    GET_USERS_FROM_JSON({ commit }) {
      return axios
        .get(
          "https://cabinet.chatkeeper.app/static/chatreferrals/-1001241070453_34.json"
        )
        .then((response) => {
          commit("SET_USERS_TO_STATE", response.data.users);
          return response.data.users;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
  },
  getters: {
    USERS(state) {
      return state.users;
    },
  },
});

export default store;
