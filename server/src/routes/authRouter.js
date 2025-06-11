const authRouter = require('express').Router();

const AuthController = require('../controllers/authController');
const { checkBody } = require('../middlewares/checkBody');
const verifyToken = require('../middlewares/verifyRefreshToken');

authRouter
  .post('/register', checkBody, AuthController.register)
  .post('/login', checkBody, AuthController.login)
  .get('/logout', AuthController.logout)
  .get('/refresh', verifyToken, AuthController.refreshTokens);

module.exports = authRouter;