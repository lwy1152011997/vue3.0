// axios 封装
import axios from 'axios'

// 定义状态常量
const STATE = 200

export function GET(url) {
  return function (params) {
    return axios.get(url, { params })
    .then((result) => {
      const {status, data} = result
      if (status === STATE) {
        return data
      }
    })
    .catch((err) => {
      // 对错误进行处理
      console.log(err)
    })
  }
}