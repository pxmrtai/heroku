var epxress = require("express");

var controller = require("../controller/transfer.controller");
var router = epxress.Router();

router.get("/create", controller.create);
router.post('/create',controller.postCreate)
module.exports = router;
