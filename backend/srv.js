//loading in modules
const xprs = require('express');
const mong = require('mongoose')
const cors = require('cors'); 


//configures environment variables stored in env file
require('dotenv').config();

//fetches mongoDB connection uri from env file
const connect = process.env.CONNECT_STR;
//preps the connection
mong.connect(connect, {useNewURLParser: true, useUnifiedTopology: true});
const connection =mong.connection;
//opens connection
connection.once('open', () => {
    console.log("connected to MongoDB");
});

//server creation
const application = xprs();
const port = process.env.PORT || 4000;

//preps for json and sets up middleware to allow other origination addresses
application.use(cors());
application.use(xprs.json());

//to map to the models through routes
const bookrouter = require('./routes/books')
application.use('/books', bookrouter)

application.listen(port, () => {
    console.log('Listening on', port)
})