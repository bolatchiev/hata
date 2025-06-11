const userRouter = require('express').Router()

const path = require('path')

const { checkId } = require('../middlewares/checkBody')

const UserController = require('../controllers/userController')
const verifyAccessToken = require('../middlewares/verifyAccesToken')

userRouter
  .get('/', UserController.getAll)
  .delete('/:id', verifyAccessToken, checkId,  UserController.delete)
  .get('/:id',  UserController.getOne)
  .put('/:id', verifyAccessToken, UserController.update)

module.exports = userRouter