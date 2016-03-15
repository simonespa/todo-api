'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.use(logger('dev'));
app.use('/api/*', bodyParser.json());

require('./lib/routes/todo')(app);

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});