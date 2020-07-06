export default {
  state: {
    settings: localStorage.getItem('settings') ? JSON.parse(localStorage.getItem('settings')) : { categoryView: 'tabs' }
  },
  getters: {
    categoryView: state => state.settings.categoryView,
    settings: state => state.settings
  },
  mutations: {
    setCategoryView(state, data) {
      state.settings.categoryView = data
    },
    setSettings(state, data) {
      state.settings = data
      localStorage.setItem('settings', JSON.stringify(data))
    }
  }
};
