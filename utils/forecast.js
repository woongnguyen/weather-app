const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url ="https://api.darksky.net/forecast/a2f723f3fc7cae831156acfd6f97472d/" + latitude +"," + longitude

  request({url:url, json: true},(error, response) => {

    if(error){
      callback('Unable to connect to weather services', undefined)
    } else if (response.body.error){
      callback('Unable to find location', undefined)
    }else{
      callback(undefined, response.body.daily.data[0].summary + ' It is currently ' +  response.body.currently.apparentTemperature + ' dergree out. There is a ' + response.body.currently.precipProbability + '% change of rain.')
    }

  })
}

module.exports = forecast

// darksky is get weather via coords of geocode 