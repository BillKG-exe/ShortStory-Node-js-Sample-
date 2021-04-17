const mysql = require('mysql');
const formidable = require('formidable');
const fs = require('fs');
const User = require('../models/user.js');

const SQL_UPDATE_USER_PROFIL_PHOTO = 'UPDATE users SET ProfilPhoto = ? WHERE email = ?';
const SQL_GET_USER = 'SELECT * FROM users WHERE email = ?';

var fileExt;

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
})

db.connect((err) => {
  if(err) throw err;
});

exports.profile = (req, res) => {
    console.log(req.body);
    console.log(req.session);

    const form = new formidable.IncomingForm();
    form.multiples = false;
    form.maxFileSize = 10 * 1024 * 1024; // 10 MB
    //form.uploadDir = photoUploadFolder;

    function checkFileType(file) {
      const type = file.picture.name.split(".").pop();
      fileExt = type;
      const validType = ['png', 'jpg', 'jpeg'];
      if(validType.indexOf(type) == -1) {
        return false;
      } else {
        return true;
      }
    }

     form.parse(req, function (err, fields, file) {
      if(err) {
        req.flash('Error', err)
        return res.redirect('/profil');
      }
      const isValid = checkFileType(file);
      if(!(isValid)) {
        console.log('File Error Type...');
        req.flash('Error', 'Please upload file type png, jpeg, jpg');
        return res.redirect('profil');
      } else {
        console.log(file.picture.name);
        const pictureName = req.session.userId +'.'+ fileExt;
        const oldpath = file.picture.path;
        //generate random number + userId for photo name
        const newpath = 'C:/Users/ouatt/Desktop/ShortStory Node Js/public/assets/Profil Photo/' + pictureName;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
        });
        
        db.query(SQL_UPDATE_USER_PROFIL_PHOTO, [pictureName, req.session.email], (err, results) => {
          if(err) {
            console.log(err);
          } else {
            console.log(results);
            return res.redirect('/profile');
          }
        }); 
      }
  });   
};
