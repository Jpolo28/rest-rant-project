require('dotenv').config()
let express = require ('express')
const res = require('express/lib/response')
const { get } = require('express/lib/response')
const app = express()

app.use ('/places', require('./controllers/places'))

app.get ('/', (res, req) => {
    res.send('Hello World!')
})

app.get ('*', (res,req) => {
    res.status(404).send('<h1> 404 Page <h1>')
})

app.listen (process.env.PORT)