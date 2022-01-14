const path = require('path');
require('dotenv').config();
const express = require('express');

const app = express();

//---INITIALIZE THE APP---
app.use(express.json());


//---ROUTES---
const router = require('./routes/routes.js');
app.get('/', router);

//---START THE SERVER---
//PORT is defined in the .env file located at the root directory.
app.listen(process.env.PORT, () => {
  console.log('---SERVER STARTED---')
})