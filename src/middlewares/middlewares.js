const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const router = require(path.join(__dirname, '..', 'routes', 'router.js'));

function init(app) {
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/', router);
}

module.exports = {
    init,
    router,
};
