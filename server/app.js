const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    methodOverride = require('method-override'),
    User = require('./models/User');
const port = 4000;

// Some some random thingies
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Production setup
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('reactApp/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'reactApp', 'build', 'index.html'));
    });
}

// Passport config - authentication
app.use(
    require('express-session')({
        secret: 'Blabla bla bla',
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

/*
    Local Strategy uses value of input field with name='email' not 'username'
    User schema still needs to have properties named 'username' and 'password'
    'username' property is filled in with e-mail value when creating object and saving to db
*/
passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        User.authenticate()
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Handle API routes
require('./routes/search')(app);
require('./routes/user')(app);


module.exports = app;