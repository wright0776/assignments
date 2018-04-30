const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const workoutRouter = require('./routes/workouts');
const moveRouter = require('./routes/moves');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use('/workouts', workoutRouter);
app.use('/moves', moveRouter);

mongoose.connect('mongodb://localhost:27017/workoutApp'), (err) => {
    if(err) console.log(`Sorry, can't connect to the database right now. ${err}`);
    console.log(`Connected to MongoDB`);
};
app.listen(port, () => console.log(`server running on port ${port}`));