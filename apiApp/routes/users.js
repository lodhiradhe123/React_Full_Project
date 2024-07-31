var express = require('express');
var router = express.Router();
const User= require("../models/user");

/* GET users listing. */
router.post('/', async(req, res, next)=> {
  const user =  await User(req.body)
  await user.save();
  res.send(user)
});

module.exports = router;
