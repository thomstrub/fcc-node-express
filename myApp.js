var express = require('express');
var app = express();

console.log("Hello World");
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
app.get('/', function(req, res){
    res.sendFile(__dirname + "/views/index.html");
})
app.get('/json', (req, res) => {
    process.env.MESSAGE_STYLE === "uppercase" 
        ? 
        res.json({"message": "Hello json"})
        :
        res.json({"message": "HELLO JSON"})
});






























 module.exports = app;
