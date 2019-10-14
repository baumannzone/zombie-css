import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/main.styl'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
