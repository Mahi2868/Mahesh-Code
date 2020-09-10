const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fs = require('fs');

let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/book', (req, res) => {
    const book = req.body;
    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send(book);
    fs.writeFile('books.json', JSON.stringify(book), (err) =>{
        if(err) throw err;
    } )
});

// app.get('/books', (req, res) => {
//     res.json(books);
// });

app.get('/books', (req, res) =>{
    fs.readFile('./books.json', 
    'utf8', (err, data) =>{
        console.log(data);
        res.send(data);
    });
});

app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
});



app.listen(8081, () =>{
    console.log("Server up and Running...");
});