var express = require('express');

app = express();

app.get('/about', function(req, res){
    res.cookie('Name', 'Akter Hussain');
    res.cookie('City', 'Dhaka');
    res.cookie('Age', 35);
    res.end('cookie set success')
})

app.listen(4040, function(){
    console.log("server run success");
})