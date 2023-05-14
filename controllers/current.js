const axios = require('axios');

const getCurrentWeather = async (city) => {
    const weatherData = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', { 
        params: {
            q: city,
        },
        headers: {
            'X-RapidAPI-Key': 'ce379f6aaamshd566e61758a63a6p18f842jsn4b7aaa901e3e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    });

    return {
        location: weatherData.data.location.name,
        current: weatherData.data.current.temp_c,
        description: weatherData.data.current.condition.text,
    };
    
};



module.exports = getCurrentWeather;