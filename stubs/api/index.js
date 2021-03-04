const router = require("express").Router();

router.post("/recover/password", (req, res) => {
  res.send(require("./mocks/recover/password/success"));
  // res.send(require('./mocks/recover/password/error'));
});

router.post("/recover/password/new", (req, res) => {
  res.send(require("./mocks/recover/password/new/success"));
  // res.status(400).send(require('./mocks/recover/password/new/error'));
});

router.get("/suggestions/themes/:id", (req, res) => {
  res.send(require("./mocks/suggestions/themes"));
});

router.post("/suggestions/updateUserThemes/:id", (req, res) => {
  res.send(require("./mocks/suggestions/success"));
  // res.status(400).send(require('./mocks/suggestions/error'));
});

router.get("/suggestions/search/:id", (req, res) => {
  res.send(require("./mocks/suggestions/suggetions"));
});

router.get("/suggestions/success", (req, res) => {
  setTimeout(() => {
    res.send(require("./mocks/suggestions/success"));
  }, 1000);
  // res.status(400).send(require('./mocks/suggestions/error'));
});
router.get("/trending/success", (req, res) => {
  setTimeout(() => {
    res.send(require("./mocks/trending/success"));
  }, 1000);
  // res.status(400).send(require('./mocks/trending/error'));
});

router.get("/themes/success", (req, res) => {
  setTimeout(() => {
    res.send(require("./mocks/themes/success"));
  }, 1000);
  // res.status(400).send(require('./mocks/themes/error'));
});

router.get("/topics/videos/:id", (req, res) => {
  res.send(require("./mocks/topics/videos"));
});

router.get("/topics/search/:name", (req, res) => {
  // res.send(require('./mocks/topics/foundVideos'));
  res.status(400).send(require("./mocks/topics/error"));
});

router.get("/detail-course/:id", (req, res) => {
  const answer = require("./mocks/detail-course/success");
  const { id } = req.params;
  if (id == 2) {
    answer.data.title = "Java";
  } else {
    answer.data.title = "Изучаем JS";
  }
  res.send(answer);
});

const users = [
  {
    login: "username",
    email: "username@mail.com",
    password: "1",
  },
  {
    login: "usersname2",
    email: "username@mail.com",
    password: "12",
  },
];

router.post("/login", (req, res) => {
  const { login, password } = req.body;

  for (let i = 0; i < users.length; i += 1) {
    if (login === users[i].login && password === users[i].password) {
      res.send(require("./mocks/login/success"));
    } else {
      res.send(require("./mocks/login/error"));
    }
  }
});

router.post("/registration", (req, res) => {
  const { login, email } = req.body;

  for (let i = 0; i < users.length; i += 1) {
    if (login === users[i].login || email === users[i].email) {
      res.send(require("./mocks/registration/error"));
    } else {
      res.send(require("./mocks/registration/success"));
    }
  }
});

module.exports = router;
