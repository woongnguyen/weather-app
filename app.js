const request = require('request')
const geocode = require('./utils/geocode')

// const urls = 'https://api.darksky.net/forecast/a2f723f3fc7cae831156acfd6f97472d/10.766,106.706'

// request({ url: urls, json: true}, (error, response) => {
//   if (error){
//     console.log('Unable connect to weather service')
//   } else if(response.body.error){
//     console.log('Unable to find location')
//   }else{
//     console.log('It is currently ' + response.body.daily.data[0].summary + '. there is a ' + response.body.currently.precipProbability + '% change of rain.')
//   }
// })

// const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicXVhbm5tMDEwNSIsImEiOiJjazRkbTJzbWQwNGM4M2xucW8xZG5yaW0yIn0.h3WSLafsgG59IouCxyCHcA"

// request({ url: geoCodeURL, json: true}, (error, response) => {
  
//   if(error) {
//     console.log('Unable connect to location services')
//   } else if(response.body.error){
//     console.log('Unable to find location, Plz try another search')
//   }else{
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude)
//   }
// })

geocode('geogia',(error, data) =>{
  console.log('Error', error)
  console.log('Data', data)
})