const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  if (req.query.name === undefined) {
    res.render('home', {
      name: 'Guest',
    });
  }
  else {
    res.render('home', {
      name: req.query.name,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
