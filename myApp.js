var express = require('express');
var app = express();

console.log("Hello World");


app.get('/', function(req, res){
    res.sendFile(__dirname + "/views/index.html");
})

app.use(__dirname + "/public", express.static());





























 module.exports = app;
