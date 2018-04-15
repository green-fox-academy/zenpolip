'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;
let mysql = require('mysql');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

app.use(bodyParser.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'reddit'
});

conn.connect(err => {
  if (err) {
    console.log("Error connecting to Database");
    return;
  }
  console.log("Connection established\n");
});

app.get('/', (req, res) => {
  conn.query('SELECT * FROM posts;', (err, result) => {
    if (err) {
      res.satus(500).send('Database error');
    }
    res.render('index', {
      posts: result,
    });
  });
});

app.get('/posts', function (req, res) {
  const sql = 'SELECT * FROM posts ORDER BY score DESC;';
  conn.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json({
      "posts": result,
    });
  });
});

// app.post('/posts', function (req, res) {
//   const sql = 'INSERT INTO posts SET ?;';
//   conn.query(sql, req.body, (err, result) => {
//     if (err) {
//       console.log(err); //eslint-disable-line
//       res.sendStatus(500);
//       return;
//     }
//     console.log('Post saved')
//     res.send({ posts: rows });
//   });
// });

app.post('/posts', function (req, res) {
  const title = req.body.title;
  const url = req.body.url;
  if (title === undefined || url === undefined) {
    res.json({
      error: 'Please provide title and url data of the new post!'
    });
  } else {
    const newPost = { title, url, score: 0 };
    conn.query('INSERT INTO posts SET ?', newPost, (err, rows) => {
      if (err) throw err;
      console.log('Post saved');
      res.send({ posts: rows });
    });
  }
});

app.put('/posts/:id/upvote', function (req, res) {
  let upvote = `UPDATE posts SET score = score + 1 WHERE id = ${req.params.id};`;
  conn.query(upvote, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("Record upvoted");
      res.json(result);
    }
  });
});

app.put('/posts/:id/downvote', function (req, res) {
  let upvote = `UPDATE posts SET score = score - 1 WHERE id = ${req.params.id};`;
  conn.query(upvote, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("Record downvoted");
      res.json(result);
    }
  });
});

app.delete('/delete', (req, res) => {
  if (req.body.title === undefined) {
    res.json({ error: 'Please provide all data what is needed.' });
  } else {
    conn.query('DELETE FROM posts WHERE title = ?;', req.body.title, (err, result) => {
      if (err) {
        res.status(500).send('Database error');
      } else {
        res.json(result);
      }
    });
  }
});

app.get('/hello', function (req, res) {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
