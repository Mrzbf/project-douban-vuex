// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index'
import store from "./store/"
import router from './router'
import movieList from "./components/movieList"
import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<index/>',
  components: {index}
})
Vue.component("movieList", movieList);
