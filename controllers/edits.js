const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/user.js');
const validation = require('input-validator-node');

//SQL STATEMENTS
const SQL_CHECK_EMAIL_IN_USE = 'SELECT email FROM users WHERE email = ?';
const SQL_ADD_NEW_USER = 'INSERT INTO users SET ?';
const SQL_LOG_USER = 'SELECT * FROM users WHERE email = ?';
const SQL_BIO = 'UPDATE users SET Bio = ? WHERE email = ?';
const SQL_ADD_NAME = 'UPDATE users SET Name = ? WHERE email = ?';
const SQL_GET_USER = 'SELECT * FROM users WHERE email = ?';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shortstory'
})

db.connect((err) => {
    if(err) throw err;
});

exports.edit_user_profile =  (req, res) => {
    console.log(process.env.DATABASE_HOST);
};