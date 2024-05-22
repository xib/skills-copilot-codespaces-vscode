// Create web server
// Run: node comments.js
// Test: http://localhost:3000/comments

var express = require('express');
var app = express();

app.get('/comments', function (req, res) {
  res.send('Comments');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});