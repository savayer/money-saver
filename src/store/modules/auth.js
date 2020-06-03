import firebase from "firebase/app";

export default {
  state: {},
  actions: {
    async login({ commit }, data) {
      try {
        const { email, password } = data;
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },

    async logout({ commit }) {
      try {
        await firebase.auth().signOut();
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },

    async signIn({ commit }, data) {
      try {
        const { email, password, username } = data;
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref(`/users/${uid}/profile`)
          .set({
            bill: 0,
            username
          });
        commit("setUser", username);
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    }
  }
};
