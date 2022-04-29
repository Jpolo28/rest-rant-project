let express = require ('express')
const { get } = require('express/lib/response')
const app = express()
get.app ('/', function (res, req) => {
    res.send('Hello World!')
})
app.listen (3000)