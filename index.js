const express = require('express')
require('dotenv').config()
console.log(process.env.PORT)

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/new', (req, res) => {
    res.send('helloworlddotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at website </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})