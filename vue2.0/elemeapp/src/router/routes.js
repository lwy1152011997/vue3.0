// 单独抽取routes 路由匹配规则
import Goods from 'components/Goods'
import Ratings from 'components/Ratings'
import Seller from 'components/Seller'

export default [
  {
    path:'/goods',
    component: Goods
  },
  {
    path:'/ratings',
    component: Ratings
  },
  {
    path:'/seller',
    component: Seller
  },
  // 打开页面默认到/goods路由页面下
  {
    path: '/',
    redirect: '/goods'
  }
]