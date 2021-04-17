const mysql = require('mysql');
const { check, validationResult } = require('express-validator');
const UserReset = require('../models/userReset.js');
const validation = require('input-validator-node');
const async = require('async');
const crypto = require('crypto'); 
const nodemailer = require('nodemailer');
const message = require('../models/resetHtmlMessage');


const SQL_CHECK_EMAIL = 'SELECT email FROM users WHERE email = ?';
const SQL_RESET_USER = 'INSERT INTO resetpassword SET ?';

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

db.connect((err) => {
    if(err) throw err;
});

exports.sendLink = async (req, res, next) => {
    console.log(req.body);
    try {
        user = new UserReset();
        const { email } = req.body;
        
        if(!email) {
            req.flash('Error', 'Please enter your email');
            return res.redirect('/forgot?')
        }

        const validator = new validation(req.body, {
            email: 'required|email',
        });
    
        const match = validator.check();
        
        if(!match) {
            req.flash('Error', 'Please enter a valid email address');
            return res.redirect('/forgot?');
        } else {
            user.setEmail(email);    
        }

        async.waterfall([
            function(done) {
                crypto.randomBytes(20, (err, buf) => {
                    var token = buf.toString('hex');
                    done(err, token)
                });
            },
            function(token, done) {
                check('email').normalizeEmail();
                db.query(SQL_CHECK_EMAIL, [email], (err, results) => {
                    if(err) {
                        console.log(err);
                    } else if(results.length != 1) {
                        req.flash('Error', 'No account with that email address exists');
                        return res.redirect('/forgot?');
                    }
                });

                user.setToken(token);
                user.setExpires(Date.now() + 3600000); //1hour
                
                db.query(SQL_RESET_USER, {
                    resetEmail: user.getEmail(),
                    resetToken: user.getToken(),
                    resetExpires: user.getExpires()
                }, (err, result) => {
                    console.log(result);
                    done(err, token, user);
                })
            },
            function(token, user, done) {
                const smtpTransport = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'senderpy19@gmail.com',
                        pass: process.env.RESET_EMAIL_PW 
                    }
                });
                const mailOptions = {
                    to: user.getEmail(),
                    from: 'senderpy19@gmail.com',
                    subject: 'ShortStory Password Reset',
                    html: message(req.headers.host + '/reset/' + token)
                }
                smtpTransport.sendMail(mailOptions, (err) => {
                    console.log('mail sent');
                    req.flash('success',
                    'An email has been sent to ' + user.getEmail() + ' with further instructions.');
                    done(err, 'done');
                }) 
            }
        ], (err) => {
            if(err) return next(err);
            res.redirect('/forgot?')
        });
    } catch (err){
        console.log(err);
    }
}