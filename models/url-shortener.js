const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  name: {
    type: String, // 資料型別: 字串
    required: true // 必填欄位
  },
  isDone: {
    type: Boolean,
    default: false // 預設完成狀態為 false
  }
})

module.exports = mongoose.model('urlShortener', urlSchema)

