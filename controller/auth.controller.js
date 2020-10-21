var db = require("../db");
const { value } = require("../db");
const md5 = require("md5");
const { findOne } = require("../models/user.model");
const User = require("../models/user.model");


module.exports.login = (req, res) => {
  res.render("auth/login",{
  });
};
module.exports.postLogin = async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(password)
  var user = await User.findOne({email: email})
  console.log(user);
  if (!user) {
    res.render("auth/login", {
      errors: ["User does not exist."],
      values: req.body,
      
    });
    return;
  }

  var hashedPassword = md5(password);
  if (user.password !== hashedPassword) {
    res.render("auth/login", {
      errors: ["Wrong password."],
      values: req.body,
    });
    return;
  }
  res.cookie("userId", user._id, {
    signed: true,
  });
  res.redirect("/users");
};
