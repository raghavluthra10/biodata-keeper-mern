const dotenv = require('dotenv');
const express = require('express');
const app = express();
// const mongoose = require('mongoose');

dotenv.config({path: './config.env'})
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json())


// linking router files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// Middleware
const middleware = (req, res, next) => {
    console.log('hello middleware');
    next()
}

app.get('/', (req, res) => {
    res.send('hello world from app.js');
});

app.get('/about', middleware, (req, res) => {
    res.send('hello about');
});

app.get('/contact',  (req, res) => {
    res.send('hello contact');
});

app.get('/signin', (req, res) => {
    res.send('hello signin');
});

app.get('/signup', (req, res) => {
    res.send('hello signup');
});

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
});