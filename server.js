const express = require('express');
const mongoose = require('mongoose');
const database = require('./config/key.js').mongoURI;

const app = express();
const port = process.env.PORT || 5000;
mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
