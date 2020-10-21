var epxress = require("express");

var controller = require("../controller/products.controller");
var Product = require('../models/product.model')
const faker = require('faker');


var router = epxress.Router();

router.get("/", controller.index);
router.get('/news/:page', (req, res, next) => {
    let perPage = 16; // số lượng sản phẩm xuất hiện trên 1 page
    let page = parseInt(req.params.page) || 1; 

    Product
      .find() // find tất cả các data
      .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage)
      .exec((err, products) => {
        Product.countDocuments((err, count) => { // đếm để tính có bao nhiêu trang
          if (err) return next(err);
           res.render('products/index',{
               products,
               current: page,
               pages: Math.ceil(count/perPage),
               n: 0
           }) 
        });
      });
  });
module.exports = router;
