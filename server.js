//Init app
const port = 3000;
const express = require('express');
const app = express();

var slug = require('slug');
var bodyParser = require('body-parser');

var find = require('array-find');

//data
var data = [];

//Routes
app
  .set('view engine', 'pug') //middleware at the top so it knows which template will be used
  .use(bodyParser.urlencoded({extended: true}))
  .use('/static', express.static('static'))
  .get('/', index)
  .get('/profile', profile)
  .get('/matches', matches)
  .get('/inbox', inbox)
  .get('/search', search)
  .get('/add', form)//Add a club form
  .get('/:id', club)//Renders data at new page
  .post('/', add);

function index (req, res) {
	res.render('index.pug');
}
function profile (req, res) {
	res.render('profile.pug');
}
function matches (req, res) {
	res.render('matches.pug');
}
function inbox (req, res) {
	res.render('inbox.pug');
}
function search (req, res) {
	res.render('search.pug');
}
function form(req, res) {
  res.render('add.pug');
}

function club(req, res, next) {
  var id = req.params.id;
  var club = find(data, function (value) {
    return value.id === id;
  });

  res.render('myclub.pug', {data: data});

  if (!club) {
    next();
    return;
  }

  res.render('myclub.pug', {data: data});
}

//form
function add(req, res) {
  var id = slug(req.body.club).toLowerCase();

  data.push({
    id: id,
    title: req.body.title,
    club: req.body.club,
    time: req.body.time,
    description: req.body.description
  });

  res.redirect('/myclub');
}

//404 error
app.use(function notfound(req, res){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('notfound.pug');
    return;
  }
});

//Confirm message
app.listen(port, message());

function message(){
  console.log('Datingwebsite listening on port ' + port + ' !');
}

