const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

const route = require('./routes')
require('./config/mongoose')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send('App is online')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.render('index')
})

app.listen(port, () => console.log(`https://localhost:${port}`))