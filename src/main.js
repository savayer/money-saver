import Vue, { components } from "./loadComponents";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notify from "./components/helpers/notify.plugin";
import dateFilter from "@/components/filters/date.filter";
import Vuelidate from "vuelidate";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
components.map(component => Vue.component(component.name, component));
Vue.filter("format", dateFilter);
Vue.use(Notify);
Vue.use(Vuelidate);

const firebaseConfig = {
  apiKey: "AIzaSyCKQyEeUU-ECO4481Ec5meyO65rzvRaS2w",
  authDomain: "money-saver-b4506.firebaseapp.com",
  databaseURL: "https://money-saver-b4506.firebaseio.com",
  projectId: "money-saver-b4506",
  storageBucket: "money-saver-b4506.appspot.com",
  messagingSenderId: "517608919755",
  appId: "1:517608919755:web:09524b5a70bb55d649814e"
};
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
