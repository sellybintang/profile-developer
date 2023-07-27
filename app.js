// const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
require ('dotenv').config()
const cors = require('cors')
const multer = require('multer')
const router = require ('./routes/indexRoutes')
const database = require('./config/database');
const bodyParser = require('body-parser');
const app = express();

database()
multer()
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);
app.use(cors());

module.exports = app;
