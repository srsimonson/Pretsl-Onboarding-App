const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

// This route sends emails from a set email address through Amazons SES
router.post('/', (req, res) => {
    // creates a transporter for SMTP using Amazon SES
    var transport = nodemailer.createTransport({
        host: "email-smtp.us-east-1.amazonaws.com",
        port: 587,
        auth: {
            user: process.env.EMAIL_USER, // Secrets are stored in local .env file
            pass: process.env.EMAIL_PASS  // Secrets are stored in local .env file
        }
    });

    // Sender, Receiver, Subject, and Body of the email
    var mailOptions = {
        from: 'babysmsh@gmail.com', // replace this email with the email address you intend to have
        to: req.body.customer_email,
        subject: req.body.subject,
        text: req.body.email_body,
    };

    // Sends mail with transporter
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
})


module.exports = router;