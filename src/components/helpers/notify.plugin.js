import M from "materialize-css";

export default {
  install(Vue) {
    Vue.prototype.$notify = function(text, type = "message") {
      const options = {
        html: text,
        displayLength: 3500,
        classes: "green darken-2"
      };

      if (type === "error") {
        options.classes = "deep-orange darken-4";
      }

      M.toast(options);
    };
  }
};
