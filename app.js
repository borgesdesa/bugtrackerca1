const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const hostname = '0.0.0.0';

require('dotenv/config');

//Import routes
const projectsRoute = require('./routes/projects');
const usersRoute = require('./routes/users');
const issuesRoute = require('./routes/issues');
const commentsRoute = require('./routes/comments');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/projects', projectsRoute);
app.use('/users', usersRoute);
app.use('/issues', issuesRoute);
app.use('/comments', commentsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('home');
});

//Disable mongoose buffering
mongoose.set('bufferCommands', false);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('Connected to DB')
);

app.listen(port, hostname, () => {
    console.log(`App listening at http://${hostname}:${port}`);
});

