
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const Swal = require('sweetalert2');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
/*

const express = require('express'),
      path = require('path'),
      morgan = require('morgan');
      //mysql = require('mysql'),
      //myConnection = require('express-myconnection');
     
   
// Cria uma constante do Express
const app = express();

// importando as rotas
const Routes = require('./routes/rotas');



// configurações
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '123',
  port: '3306',
  database: 'stone'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// usando routes
app.use('/',Routes);

// onde vão estar os meu arquivos estáticos 
app.use(express.static(path.join(__dirname, 'public')));

// start o server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});*/