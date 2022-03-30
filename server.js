'use strict';

const express = require('express');

// Constants
const PORT = 7000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World From Karthik');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
