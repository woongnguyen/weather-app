const request = require('request')

const geocode = (address, callback) =>{
  const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoicXVhbm5tMDEwNSIsImEiOiJjazRkbTJzbWQwNGM4M2xucW8xZG5yaW0yIn0.h3WSLafsgG59IouCxyCHcA"
  request({ url: geoCodeURL, json:true }, (error, response) => {
    if(error) {
      callback('Unable connect to location services', undefined)
      } else if(response.body.features.length === 0){
        callback('Unable to find location, Plz try another search', undefined)
      }else{
        callback(undefined, {
          latitude: response.body.features[0].center[1],
          longitude: response.body.features[0].center[0],
          location: response.body.features[0].place_name
        })
      }
  })
}

module.exports = geocode