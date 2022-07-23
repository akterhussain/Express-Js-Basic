var express = require('express');
var multer = require('multer');
var multer = multer();

var app = express();
app.use(multer.array());
app.use(express.static('public'));

app.post('/', function(req, res){
   let jsonData = req.body;
   res.send(JSON.stringify(jsonData));
})

app.listen(4040, function(){
    console.log("server run success");
})