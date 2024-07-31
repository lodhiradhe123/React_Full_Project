var express = require('express');
var router = express.Router();
const User = require("../models/user");

/* GET users listing. */
router.post('/', async (req, res, next) => {
  try {
    const user = await User(req.body)
    await user.save();
    res.send(user)
  } catch (error) {
    res.send(error.message)
  }
});

router.post('/login', async (req, res, next) => {
  if (req.body.email && req.body.password) {
    try {
      const user = await User.findOne(req.body)
      res.send(user);

    } catch (err) {
      res.send(err.message)
    }
  }else {
    res.status(400).send("Invalid email or password")
  }
})

module.exports = router;
