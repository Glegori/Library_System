//gathering module
const route = require("express").Router();
const bodyParser = require("body-parser");

//setting up env library
require('dotenv').config();

//getting username from env file
const userName = process.env.UNAME;
const passWord = process.env.PASS;

const userRender = `<div class="mainArea" style="display: grid; grid-template-rows: 1fr 1fr; row-gap: 10px;">
    <div class="topSec" style="grid-row: 1; display: grid; grid-template-columns: 4fr 1fr; column-gap: 10px; width: 100%; height: 100%;">
        <div class="borrowedSec" style="grid-column: 1; height: 100%; width:100%;  padding: 10px;"><h4 style="border-bottom: 1px solid black; display: flex; justify-content: space-between;">Books Borrowed<a href=""><p style="font-size: small; margin-top: 10px; margin-right: 10px;">view all</p></a></h4></div>
        <div class="sideBar" style="grid-column: 2; height: 100%; width:100%;  padding: 10px; border: 1px solid black; border-radius: 5px;"><p style="border-bottom: 1px solid black;">Returns</p></div>
    </div>
    <div class="bottomSec" style="grid-row: 2; width: 100%; height: 100%;  padding: 10px; display: grid; grid-template-columns: 4fr 1fr; column-gap: 10px">
        <div class="browseSec" style="grid-column:1;"><h4 style="border-bottom: 1px solid black; display: flex; justify-content: space-between;">Browse Library<a href=""><p style="font-size: small; margin-top: 10px; margin-right: 10px;">view all</p></a></h4></div>
    </div>
</div>`;

const adminRender = '';
/**
 * Script for clock
 * <script type="text/javascript">
    var clockElement = document.getElementById('clock');

    function clock() {
        clockElement.textContent = new Date().toString();
    }

    setInterval(clock, 1000);
</script>
 */

route.route('/').get((req, res) => {
    res.render("login.ejs", {e:null});
});
route.route('/').post((req, res) => {
    var uname = req.body.username;
    var typeoflogin = req.body.typeoflogin;
    var password = req.body.password;
    console.log(req.body);

    if(typeoflogin==null || uname == null || password==null){
        res.render("login.ejs", { e: "Please enter all the details"})
    }else{

        if(validateLogin(uname, password)){
            if(typeoflogin==="user"){
                res.render("dashboard.ejs", {loginType: "User", u: uname, render:userRender});
            }
            if(typeoflogin==="admin"){
                res.render("dashboard.ejs", {loginType: "Admin", u: uname, render:adminRender});
            }
        }else {
            res.render("login.ejs", {e:"Incorrect Password or Username"})
        }
    }
});
route.route("/home").get((req, res) => {
    
})
/*
app.get('/user', function(req,res){
    res.render("login.ejs", {type: "USER", redirect:"/user"})
})
app.get('/admin', function(req,res){
    res.render("login.ejs", {type: "ADMIN"})
})
*/

function validateLogin(uname, password){
    if(uname == userName && passWord == password){
        return true;
    }
    return false
}

module.exports = route