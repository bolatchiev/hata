const indexRouter = require('express').Router();

const userRouter = require('./userRouter.js');
const authRouter = require('./authRouter');
const favouriteRouter = require('./favouriteRoute.js');
const cardRouter = require('./card.router.js');
const rateRouter = require('./rate.router.js');
const reviewRouter = require('./review.router.js');

indexRouter.use('/users', userRouter);
indexRouter.use('/auth', authRouter);
indexRouter.use('/favourite', favouriteRouter);
indexRouter.use('/card', cardRouter)
indexRouter.use('/rate', rateRouter)
indexRouter.use('/review', reviewRouter)

indexRouter.use((req, res) => {
  res.status(404).send('Страница не найдена');
});

module.exports = indexRouter;
