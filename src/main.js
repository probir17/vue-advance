import Vue from "vue";
import App from "./App.vue";

import _ from "lodash";
Object.defineProperty(Vue.prototype, "$_", { value: _ });

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  render: h => h(App)
}).$mount("#app");
