var epxress = require("express");

var controller = require("../controller/products.controller");
var router = epxress.Router();

router.get("/", controller.index);
module.exports = router;
