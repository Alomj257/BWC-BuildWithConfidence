const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Router = require("../Routes/AllRoutes");
const path = require("path");

const passport = require("passport");
const User = require("../Model/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/consumer/digital-contractor/pic",
  express.static(path.join(__dirname, "../public/DigitalContrator"))
);
app.use(
  "/profile/pic",
  express.static(path.join(__dirname, "../public/Profile"))
);
app.use(
  "/profile/signiture",
  express.static(path.join(__dirname, "../public/Signitures"))
);

app.use("/api", Router);

app.use(passport.initialize());
passport.use(
  new GoogleStrategy(
    {
      clientID:
        process.env.GOOGLE_CLIENT_ID ||
        "422222760274-ptt6mpq86l18q4mt1f0loeqiut87a9hu.apps.googleusercontent.com",
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ||
        "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",
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        "http://localhost:5500/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
          }).save();
        }
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Internal server error");
});

module.exports = app;
