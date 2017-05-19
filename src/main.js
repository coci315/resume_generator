// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Toasted from 'vue-toasted'

import '@/common/scss/index.scss'

Vue.use(Toasted, {
  theme: 'primary',
  position: 'top-center',
  duration: 3000
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
