var express = require('express');
var mailer = require('../src/nodemailer.js');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET users listing. */
router.post('/email', async function (req, res, next) {
  console.log(req.body);
  // res.send('respond with a resource');
  const info = await mailer().sendMail({
    from: '"SMC Boston" <notice.smcboston@gmail.com>', // sender address
    replyTo: '"Anthony Valantra" <anthony.valantra@gmail.com>',
    to: `"${req.body.to.name}" <${req.body.to.email}`,
    subject: req.body.message.subject,
    text: req.body.message.plainText,
    html: req.body.message.htmlBody,
    attachments: [{   // file on disk as an attachment
      filename: req.body.attachment.filename,
      path: req.body.attachment.filePath // stream this file
    },]
  });

  res.status(200).send("Message sent " + info.messageId);
});
module.exports = router;
