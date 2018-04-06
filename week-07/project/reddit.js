'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

app.get('/hello', function(req, res){
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
 });