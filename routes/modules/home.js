// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 url model
const URLmodel = require('../../models/url-shortener')
const { generateShortURL, copyShortURL } = require('../../public/javascripts/short-url.js')

// 定義首頁路由
router.get('/', (req, res) => (res.render('index')))

router.post('/', (req, res) => {
  const { url } =  req.body // 取得 input 網址

  // 從 MongoDB 找和 input 相同網址的資料，找不到則回傳 null 並新增一組對應 input 網址的短網址到資料庫
  URLmodel.findOne({ originURL: url }) 
    .lean()
    .then((urlData) => urlData ? urlData : URLmodel.create({ originURL: url, shortURL: generateShortURL() }))
    .then((urlData) => res.render('index', { shortURL: req.headers.referer + urlData.shortURL }))
    .catch(error => console.log(error))
})

router.get('/:shortURL', (req, res) => {
  URLmodel.findOne({ shortURL: req.params.shortURL })
    .lean()
    .then((urlData) => res.redirect(urlData.originURL))
    .catch(error => console.log(error))
})
// 匯出路由模組
module.exports = router