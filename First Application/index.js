var express = require('express');

app = express();
app.get("/download", function(req, res){
    res.download('./assets/akter.jpg');
})
app.listen(4040, function(){
    console.log("server run success");
})