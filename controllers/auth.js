const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/user.js');
const validation = require('input-validator-node');


//Constants
const saltRound = 10;
const passwordLength = 8;
const proPic = 'proPic.jpg';
var ssn;

//SQL STATEMENTS
const SQL_CHECK_EMAIL_IN_USE = 'SELECT email FROM users WHERE email = ?';
const SQL_ADD_NEW_USER = 'INSERT INTO users SET ?';
const SQL_LOG_USER = 'SELECT * FROM users WHERE email = ?';
const SQL_BIO = 'UPDATE users SET Bio = ? WHERE email = ?';
const SQL_ADD_NAME = 'UPDATE users SET Name = ? WHERE email = ?';
const SQL_GET_USER = 'SELECT * FROM users WHERE email = ?';

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

db.connect((err) => {
    if(err) throw err;
    console.log('Connected to database')
});

exports.login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        check('email').normalizeEmail();
        check('password').trim().escape();

        const validator = new validation(req.body, {
            email: 'required|email',
        });
    
        const match = validator.check()

        if(!email || !password) {
            req.flash('Error', 'Please fill out the form');
            return res.redirect('/login');
        } else if (!match){
            req.flash('Error', 'Please enter a valid email');
            return res.redirect('/login');
        }

        db.query(SQL_LOG_USER, [email], async (err, results) => {
            if((results.length == 0) || !(await bcrypt.compare(password, results[0].passwd))) {
                //console.log(results[0].passwd);
                req.flash('Error', 'The email or password is not correct');
                return res.redirect('/login');
            } else {
                const ID = results[0].userId;
                ssn = req.session;
                user = new User();
                user.set(results[0].username,results[0].email,results[0].ProfilPhoto,results[0].Bio);
                user.setSCMedia(results[0].Instagram,results[0].Facebook,results[0].SnapChat,results[0].Twitter);
                ssn.userId = ID;
                ssn.email = email;
                const token = jwt.sign({ ID }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                
                //console.log('The token is: ' + token);

                const cookieOption = {
                    expires: new Date(
                        Date.now() + process.env.JWT_EXPIRES * 24 * 60 * 60 * 1000
                    ), 
                    httpOnly: true
                };

                res.cookie('user_cookie', token, cookieOption);
                return res.redirect('/profile');
            }
        });
       
    } catch (err) {
        console.log(err);
    }
};

exports.signUp = (req, res) => {
    let message = '';
    console.log(req.body);
    const { username, email, password1, password2 } = req.body;

    check('username').trim().escape();
    check('email').normalizeEmail();
    check('password1').trim().escape();
    check('password2').trim().escape();

    const validator = new validation(req.body, {
        email: 'required|email',
    });

    const match = validator.check()
    
    if(!username || !email || !password1 || !password2) {
        req.flash('Error', 'Please fill out all the fields');
        return res.redirect('/signUp');
    } else if(!match){
        req.flash('Error', 'Please enter a valid email');
        return res.redirect('/signUp');
    } else if(password1.length < passwordLength || password2.length < passwordLength){
        req.flash('Error', 'The minimum length for the password is 8');
        return res.redirect('/signUp');
    } else {
        db.query(SQL_CHECK_EMAIL_IN_USE, [email], (error, results) => {
            if(error) {
                console.log(error);
            } if(results.length > 0){
                req.flash('Error', 'The email is already in use')
                return res.redirect('/signUp');
            } else if(password1 !== password2){
                req.flash('Error', 'Passwords do not match');
                return res.redirect('/signUp');
            } else {
                user = new User();
                user.setUsername(username);
                user.setEmail(email);

                ssn = req.session;
                ssn.email = email;
                ssn.username = username;

                bcrypt.hash(password1, saltRound, (err, hash) => {
                    // Store hash in your password DB.
                    if(err) {
                        console.log(err);
                    } else {
                        db.query(SQL_ADD_NEW_USER, {
                            username: username,
                            email: email,
                            passwd: hash, 
                            ProfilPhoto: proPic
                        }, (err, results) => {
                            if(err) {
                                console.log(err);
                            } else {
                                console.log(results);
                                return res.status(200).render('usersetup', { title: 'Profil Set Up', user: user });
                            }
                        });
                       // console.log(hash);
                    }
                });
            }
        });
    }
}

exports.userSet = (req, res) => {
    if(req.session.email) {
        console.log(req.body);
        const { name, bio, socialMedia, media } = req.body;
        const SQL_ADD_MEDIA = 'UPDATE users SET ' +socialMedia+ ' = ? WHERE email = ?';

        if(name) {
            //Do somthing...
        } 
        if(bio) {
            db.query(SQL_BIO, [bio, ssn.email], (err, results) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(results);
                }
            });
        } 
        if(socialMedia && media){
            db.query(SQL_ADD_MEDIA, [media, ssn.email], (err, results) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(results);
                }
            });
        } 
        return res.redirect('/profile');
    } else {
        return res.redirect('/login');
    }
}

