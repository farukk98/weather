const axios = require('axios');
const getCurrentWeather = require('./current');

const getEstimate = async (city) => {
    try {
        const weatherData = await axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json', { 
        params: {
            q: city,
            days: 3
        },
        headers: {
            'X-RapidAPI-Key': 'ce379f6aaamshd566e61758a63a6p18f842jsn4b7aaa901e3e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    });

    return weatherData.data.forecast.forecastday.map(day => {
        return {
            date: day.date,
            city: weatherData.data.location.name,
            temperature: day.day.avgtemp_c,
            description: day.day.condition.text
        }
    })
    } catch(err) {
        return err.response.data;
    };
    
    
};



module.exports = getEstimate;