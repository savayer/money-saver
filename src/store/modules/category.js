import firebase from "firebase/app";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async createCategory({ commit }, { name, limit }) {
      try {
        const uid = firebase.auth().currentUser.uid;

        const category = await firebase
          .database()
          .ref(`/users/${uid}/categories`)
          .push({ name, limit });

        return { name, limit, id: category.key };
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    }
  }
};
