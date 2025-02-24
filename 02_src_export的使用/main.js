import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import num1, { num2 } from "./test.js";
console.log(num1);
console.log(num2);


new Vue({
  render: h => h(App),
}).$mount('#app')
