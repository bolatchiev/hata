const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const removeXPoweredBy = require('../middlewares/removeHeader');
const corsConfig = require('./corsConfig');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const serverConfig = (app) => {
  app.use(cors(corsConfig));
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));
  app.use(removeXPoweredBy);
  app.use(cookieParser());
};

module.exports = serverConfig;
