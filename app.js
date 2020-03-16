var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// to use the router module
var wiki = require('./routes/wiki.js/index.js');
// ...
app.use('/wiki', wiki);

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://nzioki:0728621332@cluster0-6tc2x.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var compression = require('compression');

// Create the Express application object
var app = express();

app.use(compression()); //Compress all routes

app.use(express.static(path.join(__dirname, 'public')));

// Define schema
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  movieid: Integer,
  category: String
});

// Compile model from schema
var Category = mongoose.model('Category', CategorySchema );

var CastSchema = new Schema({
  movieid: Integer,
  actor_name: Date,
  award: String
});

// Compile model from schema
var Cast = mongoose.model('Cast', CastSchema );

var StudioSchema = new Schema({
  studio_name: String,
  studio_city: Date,
  country: String,
  year_start: Date,
  year_end: Date,
  Founder: String
});

// Compile model from schema
var Studio = mongoose.model('Studio', StudioSchema );

var AwardSchema = new Schema({
  award_name: String,
  organization: String,
  country: String,
  colloquial: String
});

// Compile model from schema
var Award = mongoose.model('Award', AwardSchema );

var ActorSchema = new Schema({
  actor_name: String,
  gender: String,
  year_start: Date,
  year_end: Date,
  birth_year: Date,
  death_year: Date
});

// Compile model from schema
var Actor = mongoose.model('Actor', ActorSchema );

var DirectorSchema = new Schema({
  directorid: Integer,
  director_name: String,
  year_start: Date,
  year_end: Date,
  birth_year: Date,
  death_year: Date
});

// Compile model from schema
var Director = mongoose.model('Director', DirectorSchema );

var MovieSchema = new Schema({
  movieid: Integer,
  movie_title: String,
  movie_year: Date,
  director: String,
  producer: String,
  studio: String,
  process: Integr
});

// Compile model from schema
var Movie = mongoose.model('Movie', MovieSchema );


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

var compression = require('compression');
var helmet = require('helmet');

// Create the Express application object
var app = express();

app.use(helmet());
module.exports = app;

