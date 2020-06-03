import Vue from "vue";
import Vuex from "vuex";
import profile from "./modules/profile";
import auth from "./modules/auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, errorValue) {
      state.error = errorValue;
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {},
  modules: {
    auth,
    profile
  }
});
