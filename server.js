var express = require('express');
var serveStatic = require('serve-static');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(serveStatic(__dirname + '/public'));

app.use('/users', function (req, res) {
    res.json([123, 234]);
});

var PORT = 8080;
app.listen(PORT, function () {
    console.log('listening on port', PORT);
});