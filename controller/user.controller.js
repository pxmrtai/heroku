var db = require("../db");
var shortid = require("shortid");
var Users = require('../models/user.model');
const User = require("../models/user.model");
var csurf = require('csurf')


module.exports.index = async (req, res) => {
  var users =  await User.find()
  res.render("users/index", {
    users: users
  });
};
module.exports.search = async function (req, res) {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !==''){
    searchOptions.name = new RegExp(req.query.name, 'i')
    try{
      const users = await User.find(searchOptions);
      res.render('users',{
        users: users,
        searchOptions : req.query.name
      })
    
    }catch{
      res.redirect('/')
    }
  }
};
module.exports.create = function (req, res) {
  res.render("users/create", {
    user: new User()
  });
};
module.exports.id = async function (req, res) {
  var id = req.params.id;
  console.log(id)
  var user = await User.findById({_id:id})
  console.log(user)
  res.render("users/view", {
    user: user,
  });
};
module.exports.postCreate = async function (req, res) {
  const user = new User(
    {name : req.body.name ,
    phone: req.body.phone,
    avatar: req.body.avatar = req.file.path.split("\\").slice(1).join("\\")}

  )

  user.save().then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
  res.redirect('/users')
};
