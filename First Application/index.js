var express = require('express');

app = express();
app.get("/download", function(req, res){
    res.download('./assets/akter.jpg');
})

app.get('/', function(req, res){
    res.redirect('https://www.gaziakter.com/');
})

app.get('/about', function(req, res){
    res.send('This is about page');
})

app.listen(4040, function(){
    console.log("server run success");
})