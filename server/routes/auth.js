const express = require("express");
const router = express.Router();
const passport = require("passport");
const querystring = require("querystring");

require("dotenv").config();

router.get(
    "/login",
    passport.authenticate("auth0", {
        scope: "openid email profile"
    }),
    (req, res) => {
        res.redirect("/");
    }
);

router.get('/callback', function (req, res, next) {
    passport.authenticate('auth0', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            const returnTo = req.session.returnTo;
            delete req.session.returnTo;
            res.redirect(returnTo || '/');
        });
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();

    var returnTo = req.protocol + '://' + req.hostname;
    var port = req.connection.localPort;
    if (port !== undefined && port !== 80 && port !== 443) {
        returnTo += ':' + port;
    }
    var logoutURL = new url.URL(
        util.format('https://%s/v2/logout', process.env.AUTH0_DOMAIN)
    );
    var searchString = querystring.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        returnTo: returnTo
    });
    logoutURL.search = searchString;

    res.redirect(logoutURL);
});

module.exports = router;

