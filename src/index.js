const express = require('express');
const hbs = require('hbs');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
));

hbs.registerPartials(path.join(__dirname, '..', 'views', 'partials'));

app.use(express.static('public'));

app.set('view engine', 'hbs');

app.post('/login/submit', (req, res) => {
    res.send('Your account must be here!');
});

app.get('/login', (req, res) => {
	res.render('login.hbs', { title: 'Login' });
});

app.get('/rules', (req, res) => {
	res.render('rules.hbs', { title: 'Rules' });
});

app.get('/registration', (req, res) => {
	res.render('registration.hbs', { title: 'Registration' });
});

app.get('/', (req, res) => {
	res.render('home.hbs', { title: 'Home' });
});

app.listen(PORT);