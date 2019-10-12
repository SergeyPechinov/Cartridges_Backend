const
    express = require('express'),
    router = express.Router(),
    passport = require('passport'),

    //ALL ROUTES
    routesAuth = require('./auth/'),
    routesCartridges = require('./cartridges'),
    routesStatuses = require('./statuses');

router
    //AUTH
    .use('/auth', routesAuth)

    //PROTECTED
    .use('/cartridges', passport.authenticate('jwt', {session: false}), routesCartridges)
    .use('/statuses', passport.authenticate('jwt', {session: false}), routesStatuses);

module.exports = router;