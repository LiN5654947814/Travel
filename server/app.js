const express = require('express')

const app = express()

const router = require('./router')

app.all('*', function (req, res, next) {
  // 设置跨域
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use(router)

app.listen(3000, function () {
  console.log('Server Running....')
})
