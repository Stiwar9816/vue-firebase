import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// Vue-toast-notification
import VueToast from "vue-toast-notification";
// Import one of available themes
import "vue-toast-notification/dist/theme-default.css";
// Styles main *.scss*
require("./assets/css/main.scss");
Vue.use(VueToast, {
  position: "bottom",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
