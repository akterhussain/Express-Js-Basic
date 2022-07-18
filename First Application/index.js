var express = require('express');
var bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());

app.post('/', function(req, res){
   let jsonData = req.body;
   let jsonString = JSON.stringify(jsonData);
   res.send(jsonString);
})

app.listen(4040, function(){
    console.log("server run success");
})