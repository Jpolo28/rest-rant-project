const React = require('react')
const places = require('../../controllers/places')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
    return (
        <div>
            <h2>{place.name}</h2>
            <img src={place.pic} alt={places.name}></img>
        </div>
    )
    })
    return ( 
    <Def>
        <head></head>
        <body>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
        </body>
    </Def>
    )
}

module.exports = index
