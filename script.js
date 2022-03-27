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
                res.render("dashboard.ejs", {loginType: "User", u: username});
            }
            if(typeoflogin==="admin"){
                res.render("dashboard.ejs", {loginType: "Admin", u: username});
            }
    
        }else {
            res.render("login.ejs", {e:"Incorrect Password or Username"})
        }
    }
})

app.get('/dash', function(req,res){
    res.render("dashboard.ejs")
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