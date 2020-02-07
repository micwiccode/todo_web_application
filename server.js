const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const database = require('./config/key.js').mongoURI;
const tasks = require('./routes/tasks');

const app = express();

const port = process.env.PORT || 5000;

mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use('/tasks', tasks);

app.listen(port, () => console.log(`App listening on port ${port}!`));
