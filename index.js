const express = require('express');
const path = require('path');
const authRouter = require('./routes/api/auth.js');
const weatherRouter = require('./routes/api/weather.js');
const authmiddleware = require('./middleware/authmiddleware.js');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(authmiddleware);

app.use('/api/weather', weatherRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send();
});

app.listen(PORT, () => 
{
    console.log(`Server started on port ${PORT}`)
});
