import Vue from 'vue'
import Router from 'vue-router'
// import intheaters from "@/components/in_theaters"
import movieList from "@/components/movieList"
// import top250 from "@/components/top250"
import search from "@/components/search"
import notFound from "@/components/notFound"
import index from '@/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: {name: 'movieList'}
    },
    {
      path: '/movieList',
      name: 'movieList',
      component: movieList,
      meta: {keepAlive: true}
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {keepAlive: false}
    },
    {
      path: '*',
      name: 'notFound',
      component: notFound,
      meta: {keepAlive: false}
    }
  ]
})
