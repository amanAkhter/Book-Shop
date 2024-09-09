// const express = require('express');
import express from "express"; //-> "type" : "module" (in package.json)
// import db from './database';
import mysql from "mysql";
import cors from "cors";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bookshop",
});

const PORT = 8000;
const app = express();

// middleware while getting the data
app.use(express.json());
// middleware while sending the data from client
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello this is a backend");
});

// READ - Reading all the books
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// CREATE - Creating a book

// app.post("/books", (req, res) => {
//   // const q = "INSERT INTO books(`title`,`desc`,`cover`) VALUES (`Book - 2`, `This is a book named 2`, `book-2.png`)"
//   const q = "INSERT INTO books(`title`,`desc`,`cover`) VALUES (?)";
//   const values = ["Book - 2", "This is a book named 2", "book-2.png"];
//   db.query(q, [values], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`title`,`desc`,`price`,`cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// DELETE
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted");
  });
});

// UPDATE
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title` = ?, `desc` = ?, `cover` = ?, `price` = ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];
  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated");
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
