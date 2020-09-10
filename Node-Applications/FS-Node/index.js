const express = require('express');

const app = express(); 
//import routes
const usersRoute =require('./routes/users');

//Middlewares
app.use('/listUsers', usersRoute);


app.listen(3000, () =>{
    console.log("Server up and Running...");
});