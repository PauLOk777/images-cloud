const express = require('express');
const hbs = require('hbs');
const expressHbs = require('express-handlebars');
const path = require('path');

const middleware = require(path.join(__dirname, 'middlewares', 'middlewares.js'));
const router = require(path.join(__dirname, 'routes', 'router.js'));

const app = express();

const PORT = process.env.PORT || 3000;

app.engine(
    'hbs',
    expressHbs({
        layoutsDir: 'views/layouts',
        defaultLayout: 'layout',
        extname: 'hbs',
    })
);

hbs.registerPartials(path.join(__dirname, '..', 'views', 'partials'));

app.set('view engine', 'hbs');

app.listen(PORT);

middleware.init(app);