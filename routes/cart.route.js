var epxress = require("express");

var controller = require("../controller/cart.controller");

var router = epxress.Router();

router.get("/add/:productId", controller.addToCart);


module.exports = router;
    