const express = require("express");
const router = require("./src/routes/api");
const app = new express();

app.use("/api/v1", router);
app.use('*', (req, res)=>{
    res.status(404).json({status:"fail", data:"Not found"});
});

module.exports = app;