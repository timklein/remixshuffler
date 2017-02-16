'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

let port = process.env.PORT || 3000;

let server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});