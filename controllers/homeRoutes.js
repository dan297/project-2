const { Router } = require("express");
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const router = Router();

router.get("/login", (req, res) => {
  try {
    res.render("login", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;