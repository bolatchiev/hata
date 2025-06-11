const indexRouter = require('express').Router();

const userRouter = require('./userRouter.js');
const authRouter = require('./authRouter');
const favouriteRouter = require('./favouriteRoute.js');

indexRouter.use('/users', userRouter);
indexRouter.use('/auth', authRouter);
indexRouter.use('/favourite', favouriteRouter);

indexRouter.use((req, res) => {
  res.status(404).send('Страница не найдена');
});

module.exports = indexRouter;
