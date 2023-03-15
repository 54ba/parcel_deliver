"use strict";

let createError = require('http-errors');
const express = require("express");

// const env = require("node-env-file");
// env(__dirname + "/.env");
// const csrf = require("csurf");
const cors = require("cors");
let corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"]
};
let path = require('path');
// let cookieParser = require('cookie-parser');
// let logger = require('morgan');

const logger = require("./logger");

// let usersRouter = require('./routes/users');

let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//csrfProtection
// let csrfProtection = csrf();
// app.use(csrfProtection);

// app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

require('./routes/api')(app);

// app.use('/api', apiRoutes);

// app.use('/users', usersRouter);


// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
// set locals, only providing error in development
// res.locals.message = err.message;
// res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
// res.status(err.status || 500);
// res.render('error');
// });

const port = normalizePort(process.env.PORT || "3000");

app.listen(port, () => {
  console.log('Server listening on port 3000');
});




function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

//mongo handler
// const { mongoConnect } = require("./DBConnection");
const { mongoConnect } = require("./DBConnection");

//mongo handler
try {
  mongoConnect().then(() => {
    logger.info("connected to mongo");
  });
} catch (e) {
  logger.error(e.message);
}
module.exports = app;
