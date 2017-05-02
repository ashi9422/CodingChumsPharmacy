'use strict';

const bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.listen(3000, function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("server listen on port 3000")
    }
});