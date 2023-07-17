// const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const database = require ('./config/database');
const multer = require ('multer')
const router = require ('./routes/index');
require('dotenv').config();
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/developerRoutes');
const cors = require ('cors');
const app = express();
database();
multer()
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router)
app.use (cors());
// app.listen(3000,()=>{
//   console.log("Server started on port 3000")
// });

module.exports = app;
