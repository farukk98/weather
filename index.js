const express = require('express');
const path = require('path');

const weatherRouter = require('./routes/api/weather.js');
const app = express();

const PORT = process.env.PORT || 8000;

app.use('/api/weather', weatherRouter);

app.get('/', (req, res) => {
    res.send();
});

app.listen(PORT, () => 
{
    console.log(`Server started on port ${PORT}`)
});
