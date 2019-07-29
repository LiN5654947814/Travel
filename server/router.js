const express = require('express')
const router = express.Router()
const iconList = require('./db/iconList.json')
const recommendList = require('./db/recommendList')
const fs = require('fs')

router.get('/iconList', function(req, res) {
  return res.end(JSON.stringify(iconList))
})

router.get('/recommendList', function(req, res) {
  return res.end(JSON.stringify(recommendList))
})
module.exports = router
