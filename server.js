var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/nytreact');
var db = mongoose.connection;

var PORT = process.env.PORT || 3000;

db.on('error', function(err) {
  console.log('Database Error:', err);
});

if (process.env.NODE_ENV === 'production') {
  var compression = require('compression');
  app.use(compression());
} else {
  var config = require('./webpack.config.dev');
  var webpack = require('webpack');
  var compiler = webpack(config);
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
  app.use(webpackHotMiddleware(compiler));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
});

app.get('/api/saved', require('./routes/getSaved'));

app.post('/api/saved', require('./routes/postSaved'));

app.delete('/api/saved/:id', require('./routes/deleteSaved'));

app.listen(PORT, function(error) {
  if (error) throw error;
  console.log('App running on port ' + PORT);
});
