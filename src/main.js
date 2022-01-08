import Vue from "vue";
import App from "./App.vue";
import ScrollAnimation from "./directives/scrollAnimation";

Vue.config.productionTip = false;
Vue.directive("scrollanimation", ScrollAnimation);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
