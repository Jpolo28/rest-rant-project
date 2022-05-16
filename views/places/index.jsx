const React = require('react')
const places = require('../../controllers/places')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
    return (
        <div classname="col-sm-6">
            <h2>
                <a href={`/places/${place.id}`}>
                    {place.name}
                </a>
            </h2>
            <p classname="text-center">
                {places.cuisine}
            </p>
            <img src={place.pic} alt={places.name}></img>
            <p classname="text-center">
            Located in {place.city}, {place.state}
            </p>
        </div>
    )
    })
    return ( 
    <Def>
        <head></head>
        <body>
            
            <h1>Places to Rant and Rave about</h1>
            <div classname="row">
            {placesFormatted}
            </div>
        </body>
    </Def>
    )
}

module.exports = index
