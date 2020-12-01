const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
require('dotenv').config()
const mysql = require('mysql')

app.use(express.static('./public'))
app.set('view engine', 'ejs')

// MySQL config
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_CONNECTION_PASSWORD,
  port: port
});

connection.connect((err) => {
  if(err) {
    return console.log(err)
  }
  console.log("Connected!")
})

app.get('/', (req, res) => {
  res.redirect('/login')
})
app.get('/login', (req, res) => {
  res.render(`login`)
})
app.get('/you', (req, res) => {
  res.render('you', {req: req})
})

app.listen(port)