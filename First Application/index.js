var express = require('express');

app = express();
app.get("/", function(req, res){
    res.send("Hello! This is express first applicaion");
})
app.listen(8080, function(){
    console.log("server run success");
})