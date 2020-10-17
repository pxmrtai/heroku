var epxress = require("express");

var controller = require("../controller/user.controller");
var validate = require("../validate/user.validate");
var multer = require("multer");

var upload = multer({ dest: "./public/uploads/" });

var router = epxress.Router();

router.get("/", controller.index);
router.get("/cookie", function (request, response) {
  response.cookie("time", new Date()).send("Đã thiết lập cookie");
});

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.id);

router.post(
  "/create",
  upload.single("avatar"),
  validate.postCreate,
  controller.postCreate
);

module.exports = router;
