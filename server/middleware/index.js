// const models = require('../common/models');
const User = require('../models/User');
const asyncMiddleware = require('./asyncMiddleware');

let middlewareObj = {};

middlewareObj.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    // Return a `401 - Unauthorized error and let the client handle it.
    // Do not perform any redirects, as the backend does not control client-side routes.
    return res.status(401).end();
};

// Checks if the requesting user is the same as the viewed user.
middlewareObj.isUser = asyncMiddleware(async (req, res, next) => {
    const loggedInUserId = req.isAuthenticated() ? req.user.id : null;
    if (loggedInUserId === null) {
        // Unauthenticated user.
        return res.status(401).end();
    }

    // The object stored under `req.user` is a `User` instance.
    // Fetch the related `User` instance.
    // TODO - consider storing userId in the `user` model.
    const loggedInUser = await User.findOne({ user: loggedInUserId });
    const viewedUserId = req.params.id;
    if (loggedInUser._id != viewedUserId) {
        // Different user.
        return res.status(403).end();
    }

    return next();
});

// middlewareObj.checkPostOwnership = (req, res, next) => {
//     checkOwnership(req, res, next, Post, req.params.id, 'Post', '/sprints');
// };

// middlewareObj.checkProjectOwnership = (req, res, next) => {
//     checkOwnership(req, res, next, Project, req.params.id, 'Project', '/sprints');
// };

// middlewareObj.checkCommentOwnership = (req, res, next) => {
//     checkOwnership(req, res, next, Comment, req.params.id, 'Comment', '/sprints');
// };

// middlewareObj.checkLikeOwnership = (req, res, next) => {
//     checkOwnership(req, res, next, Like, req.params.id, 'Like', '/sprints');
// };

// Generic check ownership
const checkOwnership = (req, res, next, Object, id, objectName, redirectPath) => {
    if (req.isAuthenticated()) {
        Object.findById(id, function(err, object) {
            if (err || !object) {
                // req.flash('error', objectName + ' not found');
                res.redirect(redirectPath);
            } else {
                if (object.author.id.equals(req.user._id)) {
                    req.object = object;
                    next();
                } else {
                    // req.flash('error', 'You do not have permission to edit this ' + objectName.toLowerCase());
                    res.redirect(redirectPath);
                }
            }
        });
    } else {
        // req.flash('error', 'You need to be logged in to do that');
        res.redirect('back');
    }
}


module.exports = middlewareObj;