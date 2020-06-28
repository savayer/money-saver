import firebase from "firebase/app";

export default {
  state: {
    categories: []
  },
  getters: {
    categories: state => state.categories
  },
  mutations: {
    pushCategories(state, data) {
      state.categories.push(data);
    },
    clearCategories: state => (state.categories = [])
  },
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
    },

    async getCategories({ commit }) {
      try {
        const uid = firebase.auth().currentUser.uid;

        commit("clearCategories");
        await firebase
          .database()
          .ref(`/users/${uid}/categories`)
          .once("value", snap => {
            snap.forEach(item => {
              const category = item.val();
              category.id = item.key;
              commit("pushCategories", category);
            });
          });
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },

    async setCategory({ commit }, { id, name, limit }) {
      try {
        const uid = firebase.auth().currentUser.uid;

        await firebase
          .database()
          .ref(`/users/${uid}/categories/${id}`)
          .set({
            name,
            limit
          });

        // dispatch('getCategories')
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    }
  }
};
