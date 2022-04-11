//loading in modules
const xprs = require('express');
const mong = require('mongoose');
const cors = require('cors'); 
const path = require("path");
const bodyParser = require("body-parser");


//configures environment variables stored in env file
require('dotenv').config({path: path.resolve(__dirname + '/.env')});

//fetches mongoDB connection uri from env file
const connect = process.env.CONNECT_STR;
mong.connect(connect, {useNewURLParser: true, useUnifiedTopology: true});
const connection =mong.connection;
//opens connection
connection.once('open', () => {
    console.log("connected to MongoDB");
});

//server creation
const app = xprs();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));

//preps for json and sets up middleware to allow other origination addresses
app.use(cors());
app.use(xprs.json());

//to map to the models through routes
const bookRouter = require('../routes/books.js');
app.use('/books', bookRouter);

const borrowRouter = require('../routes/borrows.js');
app.use('/borrows', borrowRouter);

const authorRouter = require('../routes/authors.js');
app.use('/authors', authorRouter);

const transactionRouter = require('../routes/transactions.js');
app.use('/transactions', transactionRouter);

const memberRouter = require('../routes/members.js');
app.use('/members', memberRouter);

const loginRouter = require('../routes/login.js');
app.use('/', loginRouter);


app.use(xprs.static("../public"));

//setting up views and view area
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


app.listen(port, () => {
    console.log('Listening on', port)
});
