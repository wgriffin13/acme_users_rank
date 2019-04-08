const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');

// Logging
app.use(volleyball)

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Api <-- must use require
app.use('/api', require('./api'))

// static middleware <-- required when using webpack and bundle.js in public folder
app.use(express.static(path.join(__dirname, '.', 'public')));

// Send main html file
app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


app.use((err, res, next) => {
   res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app
