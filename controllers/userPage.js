const mysql = require('mysql');
const User = require('../models/user.js');

//SQL STATEMENTS
const SQL_GET_USER = 'SELECT * FROM users WHERE email = ?';

/*
console.log(process.env.DATABASE_HOST);
console.log(process.env.DATABASE_USER);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE);*/

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shortstory'
  })
  
  db.connect((err) => {
    if(err) throw err;
  });

exports.profile = (req, res) => {
    console.log(req.session);
    if(req.session.email){
        db.query(SQL_GET_USER, [req.session.email], (err, results) => {
            if(err) {
                console.log(err);
            } else {
                console.log(results);
                req.session.userId = results[0].userId;
                user = new User();
                user.set(results[0].username, results[0].email, results[0].ProfilPhoto, results[0].Bio);
                user.setSCMedia(results[0].Instagram,results[0].Facebook,results[0].SnapChat,results[0].Twitter);
                res.render('profile', { title: 'Profile', user: user });
            }
        });
    } else {
        res.redirect('/login');
    }
}