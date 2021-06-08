const request = require('request');


const waeather = (address,callback)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=e360aefc770b707f20bbfd45f08e81f6";

    const waeather = request({ url:url,json:true },(error,response)=>{
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.error) {
            callback('Unable to find location', undefined)
        } else {
            // console.log(response);
            // console.log(response.body);
            console.log(response.body.main.temp);
            const celsius = response.body.main.temp - 273.15;
            const feelsLike = response.body.main.feels_like - 273.15;
            callback(undefined, ' In Mumbai is currently ' + Math.floor(celsius) + ' degress out. But it feels like ' + Math.floor(feelsLike) + ' degress.')
        }
    })
}

module.exports = waeather