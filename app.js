"use strict";

let createError = require('http-errors');
const express = require("express");

const cors = require("cors");
let corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"]
};
let path = require('path');
// let logger = require('morgan');

const logger = require("./logger");


let app = express();

//csrfProtection
// let csrfProtection = csrf();
// app.use(csrfProtection);

// app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));


// include routes
require('./routes/api')(app);


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

app.listen(4000, () => {
  console.log('Server listening on port 3000');
});


//mongo handler
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
