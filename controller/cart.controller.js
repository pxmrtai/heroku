var db = require("../db");
const Session = require("../models/session.model");


module.exports.addToCart = async(req,res,next)=>{
    var productId = req.params.productId 
    var sessionId = req.signedCookies.sessionId;

    if(!sessionId){
        res.redirect('/products')
        return
    }
    var count = await Session.find()
    const cart = await Session.updateOne({id:sessionId},{cart:{push: productId }})
res.redirect('/products')
}

