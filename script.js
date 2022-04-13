const express = require("express");
const bodyParser = require("body-parser");

const username="amit2002"
const pass = "amit123"

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs')

const port = 3000;

app.get('/', function(req, res){
    res.render("login.ejs", {e:null})
})

app.get('/user', function(req,res){
    res.render("login.ejs", {type: "USER", redirect:"/user"})
})

app.get('/admin', function(req,res){
    res.render("login.ejs", {type: "ADMIN"})
})

app.post("/", function(req, res){
    var username = req.body.username;
    var typeoflogin = req.body.typeoflogin;
    var password = req.body.password;

    if(typeoflogin==null || username == null || password==null){
        res.render("login.ejs", { e: "Please enter all the details"})
    }else{

        if(validateLogin(username, password)){
            if(typeoflogin==="user"){
                res.render("userDashboard.ejs", {loginType: "User", u: username, render:userRender});
            }
            if(typeoflogin==="admin"){
                res.render("admindashboard.ejs", {loginType: "Admin", u: username, });
            }
    
        }else {
            res.render("login.ejs", {e:"Incorrect Password or Username"})
        }
    }
})

app.get('/dash', function(req,res){
    res.render("dashboard.ejs")
})
app.get('/manageaccount', function(req,res){
    res.render("manageaccount.ejs", {})
})
app.get('/borrow', function(req,res){
    res.render("viewborrow.ejs")
})
app.get('/returns', function(req,res){
    res.render("returnpage.ejs")
})
app.get('/libraryCatalog', function(req,res){
    res.render("libcat.ejs")
})
app.get('/addemps', function(req,res){
    res.render("addemployees.ejs")
})
app.get('/viewemps', function(req,res){
    res.render("viewemployees.ejs")
})
app.get('/searchemps', function(req,res){
    res.render("search.ejs")
})
app.listen(port, function(){
    console.log(`server running on port : ${port}`);
})

function validateLogin(userName, passWord){
    if(userName == username && passWord == pass){
        return true;
    }
    return false
}


const userRender = `<div class="mainArea" style="display: grid; grid-template-rows: 1fr 1fr; row-gap: 10px;">
<div class="topSec" style="grid-row: 1; display: grid; grid-template-columns: 4fr 1fr; column-gap: 10px; width: 100%; height: 100%;">
    <div class="borrowedSec" style="grid-column: 1; height: 100%; width:100%;  padding: 10px;"><h4 style="border-bottom: 1px solid black; display: flex; justify-content: space-between;">Books Borrowed<a href=""><p style="font-size: small; margin-top: 10px; margin-right: 10px;">view all</p></a></h4></div>
    <div class="sideBar" style="grid-column: 2; height: 100%; width:100%;  padding: 10px; border: 1px solid black; border-radius: 5px;"><p style="border-bottom: 1px solid black;">Returns</p></div>
</div>
<div class="bottomSec" style="grid-row: 2; width: 100%; height: 100%;  padding: 10px; display: grid; grid-template-columns: 4fr 1fr; column-gap: 10px">
    <div class="browseSec" style="grid-column:1;"><h4 style="border-bottom: 1px solid black; display: flex; justify-content: space-between;">Browse Library<a href=""><p style="font-size: small; margin-top: 10px; margin-right: 10px;">view all</p></a></h4></div>
</div>
</div>`

