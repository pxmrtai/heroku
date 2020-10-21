var epxress = require("express");
var csurf = require('csurf')
var controller = require("../controller/transfer.controller");
var router = epxress.Router();
router.use(csurf({cookie: true}));

router.get("/create", controller.create);
router.post('/create',controller.postCreate)
module.exports = router;
