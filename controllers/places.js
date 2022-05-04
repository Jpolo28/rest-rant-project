const { Router } = require('express')

const places = require('express').Router()
//GET /places
places.get('/', (req, res) => {
    let places = [{
        name:'Azteca',
        city:'Rutherford',
        state:'NJ',
        cuisines:'Mexican',
        pic:'/images/Azteca.jpg',
    },{
        name:'Yamada',
        city:'Rutheford',
        state:'NJ',
        cuisines:'Japanese, Sushi',
        pic:'/images/Yamada.jpg',
    }]
    res.render('places/index', { places })
})
router.get('/new', (req, res) => {
    res.render('places/new')
})
module.exports = places
