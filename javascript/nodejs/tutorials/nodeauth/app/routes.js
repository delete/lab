module.exports = function(app, passport) {
  //
  // HOME page with login links
  //
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  // 
  // LOGIN
  //
  app.get('/login', function(req, res){
    res.render('login.ejs', {message: req.flash('loginMessage')});
  });
  
  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', 
    failureRedirect : '/login', 
    failureFlash : true 
  }));

  //
  // SIGNUP
  //
  app.get('/signup', function(req, res){
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  //process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));


  //
  // PROFILE SECTION
  //
  app.get('/profile', isLoggedIn, function(req, res){
    res.render('profile.ejs', {
      // get the user out of session and pass to template
      user: req.user
    })
  });

  //
  // LOGOUT
  //
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  if ( req.isAuthenticated() ) {
    return next();
  }

  res.redirect('/');
}
