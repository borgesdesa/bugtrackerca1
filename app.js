const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Import routes
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRoute);
app.use('/user', userRoute);

//Routes
app.get('/', (req, res) => {
    res.send('home');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,  { useNewUrlParser: true },
    () => console.log('Connected to DB')
);

//How do we start listening to the server
app.listen(3000);