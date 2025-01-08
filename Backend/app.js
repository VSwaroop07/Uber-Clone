const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoute = require('./routes/user.routes');
const cookieParser = require('cookie-parser');
const captainRoute = require('./routes/captain.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoute);
app.use('/captains', captainRoute);

module.exports = app;
