const express = require('express');
const router = express.Router();
const getCurrent = require('../../controllers/current');
const getEstimate = require('../../controllers/estimate');
const getHistoryWeather = require('../../controllers/history');

router.get('/current/:city', async (req, res) => {
    const city = req.params.city;

    console.log(city);

    const currWeather = await getCurrent(city);
    
    console.log(currWeather);

    res.status(200).json(currWeather);
}); 

router.get('/estimate/:city', async (req, res) => {
    const city = req.params.city;

    console.log(city);

    const weatherEst = await getEstimate(city);

    console.log(weatherEst);

    res.status(200).json(weatherEst);
});

router.get('/history/:city/:date', async (req, res) => {
    const city = req.params.city;
    const date = req.params.date;

    console.log(city);
    console.log(date);

    const weatherHist = await getHistoryWeather(city, date);

    console.log(weatherHist);

    res.status(200).json(weatherHist);
});

module.exports = router;