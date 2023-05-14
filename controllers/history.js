const axios = require('axios');

const getHistoryWeather = async (city, date) => {
    const weatherData = await axios.get('https://weatherapi-com.p.rapidapi.com/history.json', {
        params: {
            q: city,
            dt: date,
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': 'ce379f6aaamshd566e61758a63a6p18f842jsn4b7aaa901e3e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    });

    console.log(weatherData.data.forecast.forecastday);


    return {
        city: weatherData.data.location.name,
        date: weatherData.data.forecast.forecastday[0].date,
        temperature: weatherData.data.forecast.forecastday[0].day.avgtemp_c,
        description: weatherData.data.forecast.forecastday[0].day.condition.text,
    }
};

module.exports = getHistoryWeather;