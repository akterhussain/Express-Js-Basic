var express = require('express');

app = express();

app.get('/about', function(req, res){
    res.append('Name', 'Akter Hussain');
    res.status(404).end('Hello Bangladesh!');
})

app.listen(4040, function(){
    console.log("server run success");
})