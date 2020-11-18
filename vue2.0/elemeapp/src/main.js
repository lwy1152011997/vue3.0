import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/css/reset.css'
import './common/scss/index.scss'

// Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router, // 将路由挂载到vue的实例,这样所有的vue实例(组件)中就能使用 this.$router获取这个路由器对象了,使用this.$route可以访问当前组件的路由
  render: h => h(App),
}).$mount('#app')
