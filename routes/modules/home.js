// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 url model
const UrlShortener = require('../../models/url-shortener')

// 定義首頁路由
router.get('/', (req, res) => {
  UrlShortener.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(urlData => res.render('index', { urlData }))
    .catch(error => console.error(error))
})

// 匯出路由模組
module.exports = router