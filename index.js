const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
//Import the routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
dotenv.config();
const PORT = process.env.PORT || 5000;

// //Connect to MongoDB
mongoose.connect(   
    process.env.DB_CONNECTION, 
    ()=> console.log('Connected to DB')
);

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//Route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => console.log("Server Up nd Running on port " + PORT));