const { Router } = require('express');
const router = Router();

router.post('/login/submit', (req, res) => {
    res.send('Your account must be here!');
});

router.get('/login', (req, res) => {
    res.render('login.hbs', { title: 'Login' });
});

router.get('/rules', (req, res) => {
    res.render('rules.hbs', { title: 'Rules' });
});

router.get('/registration', (req, res) => {
    res.render('registration.hbs', { title: 'Registration' });
});

router.get('/', (req, res) => {
    res.render('home.hbs', { title: 'Home' });
});

module.exports = router;
