const path = require('path') // 配置路径别名
// mock数据模拟配置
const mockdata = require('./mockdata/data');

// // 配置路径别名
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8068,
    before(app) {
      // before方法 提供在服务器内部先于所有其他中间件执行自定义中间件的能力
      // 配置模拟数据后只需要通过axios请求/shop/seller地址可以获取到模拟的数据
      app.get('/shop/seller', (req, res) => {
        res.json(mockdata.seller) // 可通过xx.xxx进行指定的数据访问
      })
      app.get('/shop/goods', (req, res) => {
        res.json(mockdata.goods)
      })
      app.get('/shop/ratings', (req, res) => {
        res.json(mockdata.ratings)
      })
      // app.get('/shop/ratings', (req, res) => {
      //   res.json({
      //     data: mockdata.ratings,
      //     errnumber: 0
      //   })
      // })
    }
  },
  // 配置路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set('components', resolve('src/components'))
  }
}