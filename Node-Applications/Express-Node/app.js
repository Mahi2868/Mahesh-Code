const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

//Import routes
const postsRoute = require('./routes/stdData');

//Middlewares
app.use(bodyParser.json());
app.use('/stdDetails', postsRoute);

//Routes
app.get('/', (req, res) =>{
    res.send("Home Page!!!");
})

//DB Connection
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser : true}, () =>
   {console.log("Connected to DB...")
   });

//Listening to the server
   app.listen(8081, () =>{
    console.log("Server up and running...");
});