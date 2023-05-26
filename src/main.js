// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import axios from 'axios'
import router from './router'
// import jquery  from 'jquery'
import './assets/js/jquery-3.7.0.min.js'
import './assets/js/bootstrap.bundle.min.js'
import './assets/js/all.min.js'
import './assets/css/style.css'
import './assets/css/bootstrap.min.css'
import './assets/css/all.min.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router , axios , store ,
  components: { App },
  template: '<App/>'
})
