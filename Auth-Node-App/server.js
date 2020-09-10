const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//import routes
const userRoute = require('./routes/authRoute');
const orderRoute = require('./routes/orderRoute');

dotenv.config();

//connected to db
mongoose.connect(process.env.DB_Connect, {useNewUrlParser:true}, () =>
    console.log("DB Connected")
);

//Middleware
app.use(express.json());
app.use('/api/user', userRoute);
app.use('/api/posts', orderRoute);


app.listen(3000, () => console.log('Server up and running'));