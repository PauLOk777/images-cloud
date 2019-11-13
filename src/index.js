const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
}).listen(process.env.PORT || 3000);

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

app.post('/login/submit', (req, res) => {
	res.send('Your account must be here!');
});

app.get('/rules', (req, res) => {
res.sendFile(path.join(__dirname, '..', 'public', 'rules.html'))
});