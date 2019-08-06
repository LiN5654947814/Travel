import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper /* { default global options } */)
/* eslint-disable no-new */
Vue.prototype.$axios = axios.create({
  baseURL: 'http://47.94.218.63:3000/',
  timeout: 1000
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
