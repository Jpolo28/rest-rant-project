const places = require('express').Router()

places.get('/', (req, res) => {
    res.send('GET /places')
})

places.post('/',(req,res) =>{
    res.send('')
})

module.exports = places
