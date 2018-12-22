const { seller, goods, ratings } = require('./data.json')

module.exports = {
  devServer: {
    port: 8888,
    before (app) {
      app.get('/api/seller', (req, res, next) => {
        res.json(seller)
      })
      app.get('/api/goods', (req, res, next) => {
        res.json(goods)
      })
      app.get('/api/ratings', (req, res, next) => {
        res.json(ratings)
      })
    }
  }
}
