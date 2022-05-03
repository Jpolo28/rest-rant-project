const places = require('express').Router()
//GET /places
places.get('/', (req, res) => {
    let places = [{
        name:'Azteca',
        city:'Rutherford',
        state:'NJ',
        cuisines:'Mexican',
        pic:'http://placekitten.com/250/250',
    },{
        name:'Yamada',
        city:'Rutheford',
        state:'NJ',
        cuisines:'Japanese, Sushi',
        pic:'http://placekitten.com/250/250',
    }]
    res.render('places/index', { places })
})

module.exports = places
