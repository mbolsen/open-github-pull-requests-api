const path = require('path');
require('dotenv').config();
const express = require('express');

const app = express();
const router = require('./routes/routes.js');

//---INITIALIZE THE APP---
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist', 'index.html')));

//---ROUTES---
app.get('/', router);

//---START THE SERVER---
//PORT is defined in the .env file located at the root directory.
app.listen(process.env.PORT, () => {
  console.log('---SERVER STARTED---')
})