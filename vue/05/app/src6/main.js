import Vue from 'vue'
import App from './App.vue'
import kkb from './kkb/index'

Vue.config.productionTip = false

// Vue.config.errorHandler = () => {
//   console.log('进来啦~');
// }
Vue.use(kkb);

new Vue({
  render: h => h(App),
}).$mount('#app')
