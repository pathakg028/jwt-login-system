const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = new express();

// replace with your own database name
const dbName = 'countries-app'

mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('mongodb not connnected 🙄')
  } else {
    console.log('mongodb connected ✅')
  }
})

app.use(cors())
app.use(require('./routes'))

app.listen(5000, () => {
  console.log('listening on port 5000')
})