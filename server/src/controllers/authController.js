const bcrypt = require('bcrypt');
const { UserValidator } = require('../../../Client/src/entities/user/userValidate');
const { formatResponse } = require('../utils/formatResponse');
const UserService = require('../services/userService');
const generateToken = require('../utils/generateToken')
const cookieConfig = require('../configs/cookieConfig')

class AuthController {
  // * контроллер на создание
  static async register(req, res) {
    try {
      const { name, email, password } = req.body
      // * Применяем валидатор
      const { isValid, error } = UserValidator.validate({
        name, email, password
      })

      if (!isValid) {
        res.status(400).json(formatResponse({
          statusCode: 400, message: 'Валидация не прошла',
          error
        }))
      } else {
        // * хэширование паролей
        const hashedPassword = await bcrypt.hash(password, 10);
        const normalizedEmail = email.toLowerCase();
        // * Проверка почты
        const userFound = await UserService.getByEmail(normalizedEmail);
        if (userFound) {
          res.status(400).json(formatResponse({
            statusCode: 400, message: 'Пользователь с такой почтой уже зарегистрирован',
            error: 'Пользователь с такой почтой уже зарегистрирован'
          }))
        } else {
          const user = await UserService.registerUser({
            name, email: normalizedEmail, password: hashedPassword
          })
          // * Удаление пароля
          delete user.password
          console.log(" user:", user)

          const { accessToken, refreshToken } = generateToken({user})

          res.status(200)
            .cookie('refreshToken', refreshToken, cookieConfig.refresh)
            .json(formatResponse({
              statusCode: 200, message: 'Пользователь успешно зарегистрирован',
              data: { accessToken, user }
            }))
        }
      }
    } catch (error) {
      console.log(error)
      res.status(500).json(formatResponse({
        statusCode: 500, message: 'Не удалось создать пользователя',
        error: error.message
      }))
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body
      const normalizedEmail = email.toLowerCase();

      const user = await UserService.getByEmail(normalizedEmail)

      if (!user) {
        res.status(400).json(formatResponse({
          statusCode: 400, message: "Пользователь с такой почтой не найден",
          error: "Пользователь с такой почтой не найден"
        }))

      } else {
        // * Сравнение паролей
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
          res.status(400).json(formatResponse({
            statusCode: 400, message: 'Неверный пароль',
            error: 'Неверный пароль'
          }))
        } else {
          delete user.password
          console.log(" user:", user)

          const { accessToken, refreshToken } = generateToken({user})

          res.status(200)
            .cookie('refreshToken', refreshToken, cookieConfig.refresh)
            .json(formatResponse({
              statusCode: 200, message: 'Пользователь успешно авторизован',
              data: { accessToken, user }
            }))
        }
      }
    } catch (error) {
      console.log(error)
      res.status(500).json(formatResponse({
        statusCode: 500, message: 'Не удалось войти',
        error: error.message
      }))
    }
  }

  static async logout(req, res) {
    try {
      res.status(200)
        .clearCookie('refreshToken')
        .json(formatResponse({
          statusCode: 200, message: 'Успешный выход'
        }))
    } catch (error) {
      console.log(error)
      res.status(500).json(formatResponse({
        statusCode: 500, message: 'Не удалось выйти',
        error: error.message
      }))
    }
  }

  static async refreshTokens(req, res) {
    try {
      const { user } = res.locals
      console.log(user, '++++++++++++++++++++++')

      const { accessToken, refreshToken } = generateToken({user})

      res.status(200)
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json(formatResponse({
          statusCode: 200, message: 'Перевыпуск токенов успешен!',
          data: { accessToken, user }
        }))
        
    } catch (error) {
      console.log(error)
      res.status(500).json(formatResponse({
        statusCode: 500, message: 'Не удалось получить токены',
        error: error.message
      }))
    }
  }
}

module.exports = AuthController