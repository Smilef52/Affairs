// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './rem.js'
// import Axios from 'axios'
// 以上三个都是实现准备好的样式和自适应准备


import App from './App'
import router from './router'


// 引入vuex
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex)

//将axios挂载到原型链,这样之后就不用引入以及路径写入localhost:3000了
// Axios.defaults.baseURL = "http://localhost:3000";
// Axios.defaults.withCredentials = true;
// Vue.prototype.$axios = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
