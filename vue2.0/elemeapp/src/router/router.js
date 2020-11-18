import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'isactive', //
  routes
})

export default router