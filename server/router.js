const express = require('express')
const router = express.Router()
const iconList = require('./db/iconList.json')
const recommendList = require('./db/recommendList')
const cityList = require('./db/city.json')

router.get('/iconList', function(req, res) {
  return res.end(JSON.stringify(iconList))
})

router.get('/recommendList', function(req, res) {
  return res.end(JSON.stringify(recommendList))
})

router.get('/cityList',function(req,res){
  return res.end(JSON.stringify(cityList))
})
module.exports = router
