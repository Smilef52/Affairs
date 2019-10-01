// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './rem.js'
// 以上三个都是实现准备好的样式和自适应准备


import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
