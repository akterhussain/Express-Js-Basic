const express = require("express");
const router = require("./src/routes/api");
const app = new express();

//Import Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const sanistize= require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hppsequrity = require("hpp");
const corssedddd = require("cors");

//Implement security Middleware
app.use(helmet());
app.use(sanistize());
app.use(xssClean());
app.use(hppsequrity());
app.use(corssedddd());

// Request Redlimiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 //Limit each IP to 100 requests per windowMs
});
app.use(limiter());
