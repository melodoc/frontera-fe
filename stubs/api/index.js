const router = require("express").Router();

router.post('/login', (req, res) => {
    res.send(require('./mocks/login/success'));
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

router.get('/suggestions/themes/:id', (req, res) => {
    res.send(require('./mocks/suggestions/themes'));
});

router.post('/suggestions/updateUserThemes/:id', (req, res) => {
    res.send(require('./mocks/suggestions/success'));
    // res.status(400).send(require('./mocks/suggestions/error'));
});

router.get('/suggestions/search/:id', (req, res) => {
    res.send(require('./mocks/suggestions/suggetions'));
});

router.get('/suggestions/success', (req, res) => {
    setTimeout(() => {
        res.send(require('./mocks/suggestions/success'));
    }, 1000);
    // res.status(400).send(require('./mocks/suggestions/error'));
});

router.get('/themes/success', (req, res) => {
    setTimeout(() => {
        res.send(require('./mocks/themes/success'));
    }, 1000);
    // res.status(400).send(require('./mocks/themes/error'));
});

router.get('/topics/videos/:id', (req, res) => {
    res.send(require('./mocks/topics/videos'));
});

router.get('/topics/search/:name', (req, res) => {
    // res.send(require('./mocks/topics/foundVideos'));
    res.status(400).send(require('./mocks/topics/error'));
});

module.exports = router;
