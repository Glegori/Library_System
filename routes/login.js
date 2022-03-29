//gathering module
const route = require("express").Router();

//setting up env library
require('dotenv').config();

//getting username from env file
const userName = process.env.UNAME;
const passWord = process.env.PASS;

route.route('/').get((req, res) => {
    res.render("login.ejs", {e:null});
});
route.route('/').post((req, res) => {
    var uname = req.body.userName;
    var typeoflogin = req.body.typeoflogin
    var password = req.body.password;

    if(typeoflogin==null || uname == null || password==null){
        res.render("login.ejs", { e: "Please enter all the details"})
    }else{

        if(validateLogin(username, password)){
            if(typeoflogin==="user"){
                res.render("dashboard.ejs", {loginType: "User", u: username, render:userRender});
            }
            if(typeoflogin==="admin"){
                res.render("dashboard.ejs", {loginType: "Admin", u: username, render:userRender});
            }
    
        }else {
            res.render("login.ejs", {e:"Incorrect Password or Username"})
        }
    }
});
/*
app.get('/user', function(req,res){
    res.render("login.ejs", {type: "USER", redirect:"/user"})
})
app.get('/admin', function(req,res){
    res.render("login.ejs", {type: "ADMIN"})
})
*/

function validateLogin(userName, passWord){
    if(userName == username && passWord == pass){
        return true;
    }
    return false
}

module.exports = route