const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());

//Point 1: GET /health - Returns server health status
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is healthy'});
});

//Point 2: POST /echo - Returns the JSON body sent
app.post('/echo', (req, res) => {
    res.status(200).json(req.body);
});

//Point 3: GET /time - Returns the current server time in UTC
app.get('/time', (req, res) => {
    res.status(200).json({ serverTimeUTC: new Date().toISOString() });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
