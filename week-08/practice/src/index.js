const express = require('express');
const path = require('path');
const mysql = require('mysql');


const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'shop',
  port: 3306,
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));

const types = {
  entertainment: 1,
  groceries: 2,
  restaurant: 3,
  services: 4,
  transport: 5,
};

// app.get('/', (req, res) => {
//   res.render('index', {
//     title: 'Dashboard',
//   });
// });

app.get('/', (req, res) => {
  let sql = 'SELECT * FROM history ORDER BY date DESC LIMIT 15;';
  let queryInputs = [];

  if (req.query.type !== undefined) {
    sql = 'SELECT * FROM history WHERE type = ? LIMIT 25;';
    queryInputs = [types[req.query.type]];
  }

  conn.query(sql, queryInputs, (err, result) => {
    if (err) {
      console.log(err); //eslint-disable-line
      res.sendStatus(500);
    }

    res.render('index', {
      title: 'Dashboard',
      history: result,
    });
  });
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
