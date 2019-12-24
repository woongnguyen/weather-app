
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if(!address){
  console.log('Please provide an address')
} else {
  geocode(address,(error, data) =>{

    if (error) {
      return console.log(error)
    }
  
    forecast(data.latitude, data.longitude, (error, forecasrData) => { // forecasrData is mean data name of forecast functions, this actions to take avoid replace name with geocode function
      if(error){
        return console.log('Error', error)
      }
  
      console.log(data.location)
      console.log(forecasrData)
      })
  
  })
}