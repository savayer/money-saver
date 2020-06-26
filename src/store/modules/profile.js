import firebase from "firebase/app";

export default {
  state: {
    username: null,
    bill: null
  },
  getters: {
    username: s => s.username,
    bill: s => s.bill
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setBill(state, bill) {
      state.bill = bill;
    }
  },
  actions: {
    async getUser({ commit }) {
      try {
        const uid = firebase.auth().currentUser.uid;
        const snapshot = await firebase
          .database()
          .ref(`/users/${uid}/profile`)
          .once("value");

        const username = snapshot.val().username;
        commit("setUsername", username);
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async setUser({ commit }, username) {
      try {
        const uid = firebase.auth().currentUser.uid;

        await firebase
          .database()
          .ref(`/users/${uid}/profile`)
          .child("username")
          .set(username);

        commit("setUsername", username);
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    }
  }
};
