require("dotenv").config();

const express = require("express");
var bodyParser = require("body-parser");
var csurf = require('csurf')
var mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)
const app = express();
const port = 3000;
var userRoute = require("./routes/user.route");
var cookieParser = require("cookie-parser");
var authRoute = require("./routes/auth.route");
var productRoute = require("./routes/products.route");
var cartRoute = require("./routes/cart.route");
var transferRoute = require('./routes/transfer.route')

var authMiddleware = require("./middleware/auth.middleware");
var sessionMiddleware = require('./middleware/session.middleware')

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware)
app.use(csurf({cookie: true}));

app.get("/", (req, res) => {
  res.render("index", {
    name: "AAA",
  });
});
app.use(express.static("public"));

app.use("/users", authMiddleware.requireAuth, userRoute);
app.use("/auth", authRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use('/transfer', authMiddleware.requireAuth, transferRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
