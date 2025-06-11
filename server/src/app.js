const express = require('express');
const morgan = require('morgan');
const indexRouter = require('./routes/indexRouter');
const serverConfig = require('./configs/serverConfig');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;
serverConfig(app)

app.use('/api', indexRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

module.exports = app;
