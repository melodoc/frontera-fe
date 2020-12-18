const router = require("express").Router();

router.post('/login', (req, res) => {
    res.send(require('./mocks/login/success'));
    // res.status(500).send({"code":2,"error":"Не верный логин или пароль"});
    // res.status(400).send({ message: 'Bad Request' });
});

router.post('/register', (req, res) => {
    res.send(require('./mocks/register/success'));
    // res.status(400).send(require('./mocks/register/error'));
});

router.post('/recover/password', (req, res) => {
    res.send(require('./mocks/recover/password/success'));
    // res.send(require('./mocks/recover/password/error'));
});

router.post('/recover/password/new', (req, res) => {
    res.send(require('./mocks/recover/password/new/success'));
    // res.status(400).send(require('./mocks/recover/password/new/error'));
});

router.get('/suggetions/themes/:id', (req, res) => {
    res.send(require('./mocks/suggetions/themes'));
});

router.post('/suggetions/updateUserThemes/:id', (req, res) => {
    res.send(require('./mocks/suggetions/success'));
    // res.status(400).send(require('./mocks/suggetions/error'));
});

router.get('/suggetions/search/:id', (req, res) => {
    res.send(require('./mocks/suggetions/suggetions'));
});

router.get('/topics/videos/:id', (req, res) => {
    res.send(require('./mocks/topics/videos'));
});

router.get('/topics/search/:name', (req, res) => {
    // res.send(require('./mocks/topics/foundVideos'));
    res.status(400).send(require('./mocks/topics/error'));
});

module.exports = router;
