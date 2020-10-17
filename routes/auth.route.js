var epxress = require("express");

var controller = require("../controller/auth.controller");

var router = epxress.Router();

router.get("/login", controller.login);
router.post("/login", controller.postLogin);

module.exports = router;
    