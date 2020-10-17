require('dotenv').config();
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: process.env.EMAIL_SECRET,
           pass: process.env.PASSWORD_SECRET
       }
   });

   const mailOptions = {
    from: 'tuantaitest97@gmail.com', // sender address
    to: 'pxmrtai97@gmail.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<b>Hello world?</b>'// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });