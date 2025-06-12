const jwt = require('jsonwebtoken');

const { formatResponse } = require('../utils/formatResponse');

const { REFRESH_TOKEN_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  console.log('111111111111111111111', req.cookies);
  try {
    const { refreshToken } = req.cookies; // * по ключу достаём токен из куки
    const { user } = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    // * обновление пользователя через res.locals
    res.locals.user = user;
    next();
  } catch (error) {
    console.log('Invalid refresh token', error);
    res
      .status(401)
      .clearCookie('refreshToken')
      .json(
        formatResponse({
          statusCode: 401,
          message: 'Неверный рефреш токен',
          error: error.message,
        }),
      );
  }
};

module.exports = verifyToken;
