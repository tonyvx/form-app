// "use strict";
const nodemailer = require("nodemailer");


// create reusable transporter object using the default SMTP transport
function transporter() {
  return nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
  });
}

module.exports = transporter