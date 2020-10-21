var shortId = require("shortid");
var db = require("../db");
const Session = require("../models/session.model");

module.exports = async function (req, res, next) {
  if (!req.signedCookies.sessionId) {
    var sessionId = shortId.generate();

    res.cookie("sessionId", sessionId, { signed: true });
    const session = new Session({ id: sessionId }).save();
  }
  next();
};
