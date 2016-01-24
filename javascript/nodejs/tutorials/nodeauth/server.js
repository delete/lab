var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

// configurations =====================================

// Connect to our database
mongoose.connect(configDB.url);

require('./config/passport')(passport);

// Set up or express application

// Log every request to the console - dev mode
app.use(morgan('dev'));

// Read cookies(need for auth)
app.use(cookieParser());

// Get information from html forms
app.use(bodyParser());

// Required for passport
app.use(session( { secret:'huehuebrhuehue' } ));
app.use(passport.initialize());
// Persistent login sessions
app.use(passport.session());

app.use(flash());

// routes =============================================

// Load our routes and pass in our app and fully configured passport
require('./app/routes.js')(app, passport);


// launch ==============================================

app.listen(port);
console.log('The magic happens on port' + port);
