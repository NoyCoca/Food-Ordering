const express = require('express');
const { append } = require('express/lib/response');
const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const URI = process.env.URI


mongoose.connect(URI, options).then(() => console.log('mongoDB connected'))


const db = mongoose.connection;
module.exports = db;