var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);
const port = process.env.PORT || 8001;

console.log(' publicPath ', config.output.publicPath);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/src/styles/app.css', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/styles/app.css'));
});

app.get('/public/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/bundle.js'));
});

app.listen(port);

