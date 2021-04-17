const mysql = require('mysql');

const SQL_CHECK_TOKEN = 'SELECT resetToken FROM resetpassword WHERE resetToken = ?';
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

exports.getResetPage = (req, res) => {
    db.query(SQL_CHECK_TOKEN, [req.params.token], (err, result) => {
        if(err) {
            console.log(err)
        } else if(result.length != 1 || result[0].resetExpires < Date.now()){
            req.flash('Error', 'Password reset token is invalid or has expired');
            return res.redirect('/forgot?')
        }
        /* res.render('passwordReset', { title: 'Password Reset', token: req.params.token }); */
    })
};