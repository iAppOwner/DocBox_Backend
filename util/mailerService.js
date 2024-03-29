const nodemailer = require('nodemailer');
require('dotenv').config() 


let user = process.env.MAIL;
let pass = process.env.PASSWORD;

exports.mailer = (mail,sub,data)=>
{const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   logger : true,
   debug : true,
   secureConnection : false,
  auth: {
    user : user, 
    pass : pass
  },
  tls : {
    rejectUnauthorized : true
  }
});


const mailOptions = {
  from: user,
  to: mail,
  subject: sub,
  html: data
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
}