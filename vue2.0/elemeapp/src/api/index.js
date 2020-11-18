import { GET } from './axios-http'

const getSellerInfo = GET('/shop/seller')
const getGoodsInfo = GET('/shop/goods')
const getRatingsInfo = GET('/shop/ratings')

export {
  getSellerInfo,
  getGoodsInfo,
  getRatingsInfo
}