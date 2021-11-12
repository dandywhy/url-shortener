function generateShortURL() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const url_length = 5

  let result = ''

  // 做迴圈次數 = 短網址需求長度
  for (let i = 0; i < url_length; i++) {
    // 每次取得 characters 中 index 0 - 61，隨機一個字串
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}



module.exports = {generateShortURL}
