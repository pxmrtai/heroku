var db = require('../db');
var shortid = require('shortid');
const { signedCookies } = require('cookie-parser');

module.exports.create = (req,res,next)=>{
    res.render('transfer/create',{
        csrfToken: req.csrfToken()
    })
};
module.exports.postCreate= (req,res,next)=>{
    var data = {
        id: shortid.generate(),
        amount: parseInt(req.body.amount),
        accountId: req.body.accountId,
        userId: signedCookies.userId
    }
   db.get('transfers').push(data).write()
   res.redirect('/transfer/create')

}