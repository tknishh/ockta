const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

// Configure GitHub authentication strategy
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // You can retrieve the user's access token and profile here
    // Store the necessary information for future API calls
    return done(null, profile);
  }
));

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Routes for authentication
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', { successRedirect: '/dashboard', failureRedirect: '/login' }));