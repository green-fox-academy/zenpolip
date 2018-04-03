const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.use('/assets', express.static('assets'));


app.get('/doubling', (req, res) => {
  if (req.query.input === undefined) {
    res.json({
      "error": "Please provide an input!"
    })
  } else {
    res.json({
      "received": req.query.input,
      "result": req.query.input * 2,
    });
  }
});

app.get('/greeter', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});