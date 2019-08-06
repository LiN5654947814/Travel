const express = require('express')
const router = express.Router()
const iconList = require('./db/iconList.json')
const recommendList = require('./db/recommendList')
const cityList = require('./db/city.json')
const gallaryPhotos = require('./db/gallaryPhotosList.json')
const travelInfo = require('./db/travelInfo.json')
const swiperList = require('./db/swiperList.json')
const fs = require('fs')

router.get('/swiperList', function (req, res) {
  res.end(JSON.stringify(swiperList))
})

router.get('/iconList', function (req, res) {
  return res.end(JSON.stringify(iconList))
})

router.get('/recommendList', function (req, res) {
  return res.end(JSON.stringify(recommendList))
})

router.get('/cityList', function (req, res) {
  return res.end(JSON.stringify(cityList))
})

router.get('/gallaryPhotos', function (req, res) {
  const id = req.query.id // 获取path传参的值
  fs.readFile('./db/gallaryPhotosList.json', function (err, data) {
    var grallary = [] // 定义新数组接受根据传进来的id遍历JSON匹配的值
    if (err) {
      res.end('error')
    } else {
      var grallaryList = JSON.parse(data.toString()) // 解析读取的json数据，转为json对象
      var grallaryArray = grallaryList.message // 获取json中message数组
      for (let i = 0; i < grallaryArray.length - 1; i++) {
        // 遍历message数组
        if (grallaryArray[i].id === id) {
          // 根据传进来的id和message数组中的id做匹配
          grallary.push(grallaryArray[i]) // 增加到新数组中
        }
      }
    }
    res.end(JSON.stringify(grallary)) // 将查询到匹配的数据转字符串以新数组的形式打印出来
  })
})

router.get('/travelInfo', function (req, res) {
  const id = req.query.id
  fs.readFile('./db/travelInfo.json', function (err, data) {
    var travelInfoList = []
    if (err) {
      res.end('err')
    } else {
      var travelList = JSON.parse(data.toString())
      var travelArray = travelList.message
      for (let i = 0; i < travelArray.length; i++) {
        if (travelArray[i].id === id) {
          travelInfoList.push(travelArray[i])
        }
      }
    }
    res.end(JSON.stringify(travelInfoList))
  })
})
module.exports = router
