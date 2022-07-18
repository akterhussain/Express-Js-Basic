var express = require('express');

app = express();

app.get('/', function(req, res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName +' '+lastName);
})

app.listen(4040, function(){
    console.log("server run success");
})