import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    user: null,
    bill: 0
  },
  mutations: {
    setError(state, errorValue) {
      state.error = errorValue;
    },
    setUser(state, user) {
      state.user = user;
    },
    setBill(state, bill) {
      state.bill = bill;
    }
  },
  getters: {
    error: s => s.error,
    user: s => s.user,
    bill: s => s.bill
  },
  actions: {
    async login({ commit }, data) {
      try {
        const { email, password } = data;
        await firebase.auth().signInWithEmailAndPassword(email, password);

        const uid = firebase.auth().currentUser?.uid;
        const snapshot = await firebase
          .database()
          .ref(`/users/${uid}/profile`)
          .once("value");
        commit("setUser", snapshot.val().username);
      } catch (error) {
        console.log(error);
        commit("setError", error);
        throw error;
      }
    },

    async logout() {
      try {
        await firebase.auth().signOut();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    async signIn({ commit }, data) {
      try {
        const { email, password, username } = data;
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = firebase.auth().currentUser?.uid;
        firebase
          .database()
          .ref(`/users/${uid}/profile`)
          .set({
            bill: 0,
            username
          });
        commit("setUser", username);
      } catch (error) {
        console.log(error);
        commit("setError", error);
        throw error;
      }
    }
  }
});
