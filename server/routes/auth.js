const verifySignUp = require('../middlewares/verifySignUp');
const controller = require('../controllers/auth');
const express = require('express');
const { verify } = require('jsonwebtoken');
const router = express.Router();

router.post(
	'/api/auth/signup',
	[ verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted ],
	(req, res, next) => {
		controller.signup(req, res, next)
	}
);

router.post('/api/auth/signin', (req, res, next) => {
	controller.signin(req, res,next);
});

module.exports = router;
