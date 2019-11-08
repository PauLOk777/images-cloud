const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
    res.end();
}).listen(3000);
