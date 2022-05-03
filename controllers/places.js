const places = require('express').Router()

places.get('/', (res, req) => {
    res.send('GET /places')
})

places.post('/',(res,req) =>{
    res.send('')
})

module.exports = places
