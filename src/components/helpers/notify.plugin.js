import M from "materialize-css";

export default {
  install(Vue) {
    Vue.prototype.$notify = function(text) {
      const options = {
        html: text,
        displayLength: 3500,
        classes: "deep-orange darken-4"
      };
      M.toast(options);
    };
  }
};
