const express = require('express');
const flash = require('express-flash')
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const userPageController = require('./controllers/userPage');
const { editProfile } = require('./controllers/edits');

dotenv.config({ path: './.env' });

//Express App
const app = express();

//req data
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(session({ 
    secret: 'adf456e2d5ss5ds2dw',
    resave: true,
    saveUninitialized: true,
    //cookie: { secure: true }
}));
app.use(flash());

//Register View Engine
app.set('view engine', 'ejs');

//Defining routes
app.use('/auth', require('./routes/auth'));
app.use('/uploads', require('./routes/uploads'));
app.use('/edits', require('./routes/edits'));
app.use('/reset', require('./routes/reset'));

//Listen for request
app.listen(5000);//3000
console.log('Listening for requests...');

//Middleware and static files
//app.use(morgan('dev'));
app.use(express.static('./public/css'));
app.use(express.static('./public/js'));
app.use(express.static('./public/assets/img'));
app.use(express.static('./public/assets/Profil Photo'));

app.get('/home', (req, res) => {
    if(req.session.email) {
        res.redirect('/profile')
    } else {
        res.render('main', { title: 'Home' });
    }
});

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/login', (req, res) => {
    if(req.session.email) {
        res.redirect('/profile');
    } else {
        res.render('login', { title: 'Login', message: req.flash('Error') });
    }
});

app.get('/forgot?', (req, res) => {
    res.render('forgotPassword', { 
        title: 'Password Reset',
        message: req.flash('Error'),
        success: req.flash('success') });
}); 

app.get('/resetPassword', (req, res) => {
    res.render('resetPassword', { title: 'Password Reset' })
})

app.get('/signUp', (req, res) => {
    if(req.session.email) {
        res.redirect('/profile');
    } else {
        res.render('signUp', { title: 'Sign Up', message: req.flash('Error') });
    }
});

app.get('/userSetUp', (req, res) => {
    if(req.session.email) {
        res.render('userSetUp', { title: 'Profil Set Up' });
    } else {
        res.redirect('/login');
    }
    
});

app.get('/newsFeed', (req, res) => {
    res.render('newsFeed', { title: 'Feed' });
/*     if(req.session.email) {
        res.render('newsFeed');
    } else {
        res.redirect('/login');
    } */
})

app.get('/profile', userPageController.profile);

app.get('/editProfile', (req, res) => {
    res.render('editMyProfile', { title: 'Edit Profile' });
} );

app.get('/logOut', (req, res) => {
    //Destroy user session to logout
    req.session.destroy(function(err) {
        // cannot access session here
        res.redirect('/login');
    })
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404 Page not found' });
});