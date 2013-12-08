var express = require('express');
var app = express();

app.get('/', function(request, response)	{
	response.end('Hello Express');
})

app.listen('3000');

console.log('Listening on port 3000')
