import firebase from "firebase/app";

export default {
  state: {
    user: null,
    bill: null
  },
  getters: {
    user: s => s.user,
    bill: s => s.bill
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setBill(state, bill) {
      state.bill = bill;
    }
  },
  actions: {
    async getUser({ commit }) {
      const uid = firebase.auth().currentUser.uid;
      const snapshot = await firebase
        .database()
        .ref(`/users/${uid}/profile`)
        .once("value");

      commit("setUser", snapshot.val().username);
    }
  }
};
