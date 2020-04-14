const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require('mongoose');

var cors = require('cors');
const api = require('./routes/api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist')))

app.use(cors());
// Set our api routes
app.use('/api', api);

mongoose.connect('mongodb+srv://root:root@cluster0-bmdzk.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(result => {
        app.listen(3000, () => console.log("Listening on port 3000...!!!!!!!!!!!"));
    })
    .catch(err => {
        console.log(err);
    })