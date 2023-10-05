const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
require('dotenv').config()

const GOOGLE_CLIENT_ID = "735986879432-k26ac2vc018r3k2784o228k7tu4c24m0.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    // clientID:     process.env.GOOGLE_CLIENT_ID,
    // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done){
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user)
})

passport.deserializeUser(function(user, done) {
    done(null, user)
})