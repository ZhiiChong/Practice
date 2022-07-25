import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.errorHandler = () => {
  console.log('进来啦~');
}

new Vue({
  render: h => h(App),
}).$mount('#app')
