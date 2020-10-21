const faker = require('faker');
var Product = require('../models/product.model')


module.exports.index = async(req, res) => {
  // var page = parseInt(req.query.page) || 1;
  // var perPage = 8;
  // var start = (page - 1) * perPage;
  // var end = (page - 1) * perPage + perPage;
  // res.render("products/index", {
  //   n: 1,
  //   // products: db.get('products').value().slice(start,end)
  //   products: db.get("products").drop(start).take(perPage).value(),
  // });

 var products = await Product.find();
  res.render('products/index',{
    products: products
  })
   // Fake data products

};
