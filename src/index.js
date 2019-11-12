const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    res.end();
}).listen(process.env.PORT || 3000);
