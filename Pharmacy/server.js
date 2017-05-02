'use strict';

const bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://ashani:ashani123@ds011902.mlab.com:11902/userstory12', err => {
    if (err) {
        console.log(err);
        //process.exit(1);
    }
    else {
        console.log('connect to the database');
    }
});

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(3000, function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("server listen on port 3000")
    }
});