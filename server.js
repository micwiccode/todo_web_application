const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const tasks = require('./routes/api/tasks');
const users = require('./routes/api/users');
const login = require('./routes/api/login');

const app = express();

const port = process.env.PORT || 5000;
const database = config.get('mongoURI');

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/api/tasks', tasks);
app.use('/api/users', users);
app.use('/api/login', login);

app.listen(port, () => console.log(`App listening on port ${port}!`));
