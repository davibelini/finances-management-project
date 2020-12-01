const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const mysql = require('mysql')

app.use(express.static('./public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.redirect('/login')
})
app.get('/login', (req, res) => {
  res.render(`login`)
})
app.get('/you', (req, res) => {
  res.render(`you`, {req: req})
})

app.listen(port)