var path = require('path');
var bodyParser = require('body-parser');

var repo = require('./repo');
var express = require('express')
var app = express()

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./index.html'));
});

app.get('/comments/all', function (req, res) {
  let allComments = repo.all;
  res.json(allComments);
});

app.post('/comments/new', function(req, res) {
  // we don't really do anything with this comment, just return it to the client
  res.json(req.body);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
