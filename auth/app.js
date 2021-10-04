const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
var GitHubStrategy = require('passport-github2').Strategy;

const config = require("./config/config.json");

const app = express();

app.use(cors());
app.options('*', cors());

app.disable('x-powered-by');

const port = process.env.PORT || 1337;

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

passport.use(new GitHubStrategy({
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: "http://localhost:1337/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
    return done(profile);
}
));

const cakes = [
    { name: "Tårta", price: 50 },
    { name: "Mandelkubb", price: 5 },
    { name: "Dammsugare", price: 10 },
];

app.get('/auth/github',
passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback',
passport.authenticate('github', { failureRedirect: '/login' }),
function(req, res) {
    // Successful authentication, redirect home
    return res.redirect('/auth/send_success_json');
});

app.get('/auth/send_success_json', (req, res) => res.json({ data: "success" }));

app.get("/", (req, res) => res.json({ data: cakes }));

const server = app.listen(port, () => console.log('Order api listening on port ' + port));

module.exports = server;
