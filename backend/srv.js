//loading in modules
const xprs = require('express');
const mong = require('mongoose')
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

//preps for json and sets up middleware to allow other origination addresses
app.use(cors());
app.use(xprs.json());

//to map to the models through routes
const bookRouter = require('../routes/books.js');
app.use('/books', bookRouter);

const loginRouter = require('../routes/login.js');
app.use('/', loginRouter)

app.listen(port, () => {
    console.log('Listening on', port)
});

//Amit can you comment
app.use(bodyParser.urlencoded({ extended: true }));

app.use(xprs.static("public"));

app.set('view engine', 'ejs')


const userRender = `<div class="mainArea" style="display: grid; grid-template-rows: 1fr 1fr; row-gap: 10px;">
<div class="topSec" style="grid-row: 1; display: grid; grid-template-columns: 4fr 1fr; column-gap: 10px; width: 100%; height: 100%;">
    <div class="borrowedSec" style="grid-column: 1; height: 100%; width:100%;  padding: 10px;"><h4 style="border-bottom: 1px solid black; display: flex; justify-content: space-between;">Books Borrowed<a href=""><p style="font-size: small; margin-top: 10px; margin-right: 10px;">view all</p></a></h4></div>
    <div class="sideBar" style="grid-column: 2; height: 100%; width:100%;  padding: 10px; border: 1px solid black; border-radius: 5px;"><p style="border-bottom: 1px solid black;">Returns</p></div>
</div>
<div class="bottomSec" style="grid-row: 2; width: 100%; height: 100%;  padding: 10px; display: grid; grid-template-columns: 4fr 1fr; column-gap: 10px">
    <div class="browseSec" style="grid-column:1;"><h4 style="border-bottom: 1px solid black; display: flex; justify-content: space-between;">Browse Library<a href=""><p style="font-size: small; margin-top: 10px; margin-right: 10px;">view all</p></a></h4></div>
</div>
</div>`

